import { testData } from "../data/inputData";
import { ADD_QUESTION_TO_LIST } from "../actions/actions";



export const questions = (state = testData, action) => {
    switch (action.type) {
        case ADD_QUESTION_TO_LIST:
            return [...state, action.payload];
        default:
            return state;
    }
}