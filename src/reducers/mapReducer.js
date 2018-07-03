import { SET_POLYGON } from '../actions';

export default (state = { polygons: [] }, action) => {
  switch (action.type) {
    case SET_POLYGON:
      const newPolygons = [...state.polygons, action.payload];
      console.log({ ...state, polygons: newPolygons });
      return { ...state, polygons: newPolygons };
    default:
      return state;
  }
};
