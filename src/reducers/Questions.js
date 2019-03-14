import { testData } from "../data/inputData";
import { ADD_QUESTION_TO_LIST } from "../actions/actions";

const initialOptions = [
    { value: 'Option1', text: 'Option1' },
    { value: 'Option2', text: 'Option2' },
    { value: 'Option3', text: 'Option3' },
    { value: 'Option4', text: 'Option4' }
];


export const questions = (state = testData, action) => {
    switch (action.type) {
        case ADD_QUESTION_TO_LIST:
            return [...state, action.payload];
        default:
            return state;
    }
}

export const comboBoxOptions = (state = initialOptions, action) => {
    switch (action.type) {
        default:
            return state;
    }
}