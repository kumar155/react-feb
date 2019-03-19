import { GET_USERS_DATA, GET_USERS_REQUEST_SUCCESS, GET_USERS_REQUEST_FAILURE } from "./actionConstants";

export const ADD_QUESTION_TO_LIST = 'ADD_QUESTION_TO_LIST';

export const addQuestion = (state) => ({
    type: ADD_QUESTION_TO_LIST,
    payload: state,
});


export const getUsersData = () => ({
    type: GET_USERS_DATA,
});

export const getUsersRequestSuccess = (users) => ({
    type: GET_USERS_REQUEST_SUCCESS,
    payload: users,
});

export const getUsersRequestFailure = (error) => ({
    type: GET_USERS_REQUEST_FAILURE,
    payload: error,
});