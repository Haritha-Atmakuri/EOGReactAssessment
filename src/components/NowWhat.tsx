import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from './CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from './Avatar';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    margin: '5% 25%',
  },
});

export default () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title="OK, Haritha, you're all setup. Now What?" />
      <CardContent>
        <List>
          <ListItem>
            <Avatar>1</Avatar>
            <ListItemText primary="Explore the GraphQL API" />
          </ListItem>
          <ListItem>
            <Avatar>2</Avatar>
            <ListItemText primary="Add ability to select Metrics" />
            <CardActions>
              <Button size="small" color="primary">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button size="small" color="primary">
                <Link to="/chart">Chart</Link>
              </Button>
            </CardActions>
          </ListItem>
          <ListItem>
            <Avatar>3</Avatar>
            <ListItemText primary="Display the current metric data" />
          </ListItem>
          <ListItem>
            <Avatar>4</Avatar>
            <ListItemText primary="Chart historical metric data" />
          </ListItem>
          <ListItem>
            <Avatar>5</Avatar>
            <ListItemText primary="Submit Your App" />
          </ListItem>
        </List>

        <Typography variant="body1">
          Remember to refer to our <a href="https://react.eogresources.com/assessing">How We Assess Submissions</a>{' '}
          guidelines, as well as the <a href="https://react.eogresources.com/api">GraphQL API Documentation</a>.
        </Typography>
      </CardContent>
    </Card>
  );
};
