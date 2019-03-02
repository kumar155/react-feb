
// reducer
export const SimpleReducer2 = (state = 'Initial value', action) => {
    switch(action.type) {
        case 'GET_USER_NAME':
            return 'This is my reducer returned value';
        default:
            return state;
    }
}


export default SimpleReducer2;