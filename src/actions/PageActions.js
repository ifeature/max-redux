import {
  SET_YEAR,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  //GET_PHOTOS_FAILURE
} from '../constants/Page';

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year
  };
}

export function getPhotos(year) {
  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [{title: 'Photo1'}, {title: 'Photo2'}, {title: 'Photo3'}],
        meta: { year }
      })
    }, 2000);
  }
}

