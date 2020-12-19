import * as actionTypes from '../action'

const initialState = {
    posts: [],
    counter_two:0
}
const postReducer = (state = initialState, action) => {
    if (action.type === actionTypes.increase){
        return {
            ...state,
            counter_two: state.counter_two + 1
         }    
    }

    return state;
}

export default postReducer;