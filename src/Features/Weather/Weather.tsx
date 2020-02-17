import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './reducer';
import { Provider, createClient, useQuery } from 'urql';
import { useGeolocation } from 'react-use';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '../../components/Chip';

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
});

const query = `
query($latLong: WeatherQuery!) {
  getWeatherForLocation(latLong: $latLong) {
    description
    locationName
    temperatureinCelsius
  }
}
`;

const getWeather = (state: any) => {
  const { temperatureinFahrenheit, description, locationName } = state.weather;
  return {
    temperatureinFahrenheit,
    description,
    locationName,
  };
};

export default () => {
  return (
    <Provider value={client}>
      <Weather />
    </Provider>
  );
};

const Weather = () => {
  const getLocation = useGeolocation();
  // Default to kansas
  const latLong = {
    latitude: getLocation.latitude || 38.500000,
    longitude: getLocation.longitude ||-98.000000,
  };
  const dispatch = useDispatch();
  const { temperatureinFahrenheit, description, locationName } = useSelector(getWeather);

  const [result] = useQuery({
    query,
    variables: {
      latLong,
    },
  });
  const { fetching, data, error } = result;
  useEffect(() => {
    if (error) {
      dispatch(actions.weatherApiErrorReceived({ error: error.message }));
      return;
    }
    if (!data) return;
    const { getWeatherForLocation } = data;
    dispatch(actions.weatherDataRecevied(getWeatherForLocation));
  }, [dispatch, data, error]);

  if (fetching) return <LinearProgress />;

  return <Chip label={`Weather in ${locationName}: ${description} and ${temperatureinFahrenheit}°`} />;
};
