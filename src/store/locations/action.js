import { ADD_LOCATION } from './const';


export const AddLocationAction = location => 
    dispatch => dispatch({
        type: ADD_LOCATION,
        payload: location
    })
