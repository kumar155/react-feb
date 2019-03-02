import { GET_USER_NAME, INCREMENT_COUNT, DECREMENT_COUNT } from "./actionConstants";

// actions

export const getUserName = () => ({
    type: GET_USER_NAME,
    payload: null,
});

export const incrementCount = () => ({
    type: INCREMENT_COUNT,
});

export const decrementCount = () => ({
    type: DECREMENT_COUNT,
});