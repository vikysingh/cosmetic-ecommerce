import actionTypes from "../actionTypes/ActionType"

const setQuery = (value) => {
    return {
        type: actionTypes.SET_QUERY,
        payload: value
    }
}

export  default setQuery