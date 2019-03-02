import { GET_USER_NAME, INCREMENT_COUNT, DECREMENT_COUNT } from "../actions/actionConstants";


// reducer - simplereducer
export const SimpleReducer = (state = 'My name is satish', action) => {
    switch (action.type) {
        case GET_USER_NAME:
            return 'This is my reducer returned value';
        default:
            return state;
    }
}

// reducer - counter
export const incrementCounter = (state = 1, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return state + 1;
        default:
            return state;
    }
};

export const decrementCounter = (state = 10, action) => {
    switch (action.type) {
        case DECREMENT_COUNT:
            return state - 1;
        default:
            return state;
    }
};




