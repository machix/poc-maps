/*global google*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { DrawingManager } from 'react-google-maps/lib/components/drawing/DrawingManager';
import * as actions from '../actions';

class Map extends Component {
  handlePolygon = polygon => {
    var coordinates = polygon.getPath().getArray();
    this.props.setPolygon(coordinates);
    console.log(coordinates);
  };
  render() {
    return (
      <GoogleMap defaultZoom={15} defaultCenter={new google.maps.LatLng(-19.9211964, -43.9511931)}>
        <DrawingManager
          onPolygonComplete={this.handlePolygon}
          defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
          defaultOptions={{
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [
                // google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON
                // google.maps.drawing.OverlayType.POLYLINE,
                // google.maps.drawing.OverlayType.RECTANGLE
              ]
            },
            circleOptions: {
              fillColor: `#ffff00`,
              fillOpacity: 1,
              strokeWeight: 5,
              clickable: false,
              editable: true,
              zIndex: 1
            }
          }}
        />
      </GoogleMap>
    );
  }
}

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  connect(
    null,
    actions
  )
)(Map);
