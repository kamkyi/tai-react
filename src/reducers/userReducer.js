import * as actionTypes from '../action'

const initialState = {
    counter:0
}

const userReducer = (state = initialState, action) => {
    if (action.type === actionTypes.increase){
        return {
            ...state,
            counter: state.counter + 1
         }    
    }

    if (action.type === actionTypes.decrease)
    {
        return {
            ...state,
            counter: state.counter -1
         }    
    }

    return state;
}

export default userReducer;