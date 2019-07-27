import { INIT_STATE } from './initialState';
import { ADD_LOCATION } from './const';


export default function reducer(state = INIT_STATE, action) {
    
    switch(action.type) {
        case ADD_LOCATION: 
            return {
                ...state,
                locations: state.locations.concat(action.payload)
            }

        default:
            return state;
    }
}
