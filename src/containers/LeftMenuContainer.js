import React from 'react';
import { connect } from 'react-redux';
import LeftMenu from '../components/LeftMenu';

class LeftMenuContainer extends React.Component {
  render() {
    return <LeftMenu map={this.props.map} />;
  }
}

function mapStateToProps({ map }) {
  return { map };
}

export default connect(mapStateToProps)(LeftMenuContainer);
