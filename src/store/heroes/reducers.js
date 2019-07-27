import { INIT_STATE } from './initialState';
import { ADD_HERO } from './const';


export default function reducer(state = INIT_STATE, action) {
    
    switch(action.type) {
        case ADD_HERO: 
            return {
                ...state,
                heroes: state.heroes.concat(action.payload)
            }

        default:
            return state;
    }
}
