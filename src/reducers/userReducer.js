import { GET_USERS_REQUEST_SUCCESS, GET_USERS_REQUEST_FAILURE, GET_USERS_DATA } from "../actions/actionConstants";


export const userReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USERS_REQUEST_SUCCESS:
            return action.payload;
        case GET_USERS_REQUEST_FAILURE:
            return [];
        default:
            return state;
    }
}

export const isDataLoading = (state = false, action) => {
    switch(action.type) {
        case GET_USERS_DATA:
            return true;
        case GET_USERS_REQUEST_SUCCESS:
        case GET_USERS_REQUEST_FAILURE:
            return false;
        default:
            return state;
    }
}