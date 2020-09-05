import actionType from "../actionTypes/ActionType"

export const queryReducer = ( state = "", action ) => {
    switch(action.type) {
        case actionType.SET_QUERY:
            return state = action.payload || "";
        default:
            return state
    }
}