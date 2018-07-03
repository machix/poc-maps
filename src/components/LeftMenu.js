import React from 'react';
import _ from 'lodash';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';

const styles = {
  h1: {
    textAlign: 'left',
    padding: '10px'
  }
};

class LeftMenu extends React.Component {
  state = {};

  renderPolygons = () => {
    return _.map(this.props.map.polygons, polygon => {
      let i = 0;
      return (
        <li>
          {_.map(polygon, dot => {
            i++;
            return (
              <p>
                P{i}:{dot.lat() + dot.lng()}
              </p>
            );
          })}
        </li>
      );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar>
          <Typography className={classes.h1} variant="title" gutterBottom>
            Title
          </Typography>
        </AppBar>
        <div>
          <ul>{this.renderPolygons()}</ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LeftMenu);
