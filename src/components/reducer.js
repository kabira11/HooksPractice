import { UpdateAvg } from './action';

const initialState = {
    average: 0
  }
  export default function(state = initialState, action){
    switch(action.type){
        case 'UPDATE_AVG' :
        return {
            ...state,
            average: action.payload
          };

        default:
            return state; 
    }
}



