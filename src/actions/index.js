export const SET_POLYGON = 'set_polygon';

export const setPolygon = polygon => dispatch => {
  dispatch({ type: SET_POLYGON, payload: polygon });
};
