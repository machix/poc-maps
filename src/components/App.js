import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from './AppBar';
import Map from './Map';
import LeftMenuContainer from '../containers/LeftMenuContainer';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  grid: {
    marginTop: 10
  },
  flex: {
    flex: 1
  },
  logo: {
    width: 100
  },
  avatar: {
    marginLeft: 10,
    color: 'gray'
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar>
            <img src="/images/prodap_logo.png" alt="logo prodap" className={classes.logo} />
            <Typography variant="title" color="inherit" className={classes.flex} />
            <Avatar>F</Avatar>
            <Typography variant="title" className={classes.avatar}>
              Fulano
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid className={classes.grid} container spacing={24}>
          <Grid item xs={12} sm={8}>
            <Paper square={true} className={classes.paper}>
              <Map isMarkerShown />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper square={true} className={classes.paper}>
              <LeftMenuContainer />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
