import { ADD_HERO } from './const';


export const AddHeroAction = hero => 
    dispatch => dispatch({
        type: ADD_HERO,
        payload: hero
    })
