import { put, takeLatest, all } from 'redux-saga/effects';
import * as actions from '../actions/actionConstants';
import * as userActions from '../actions/actions';

function* fetchUsers() {
    try {
        const json = yield fetch('https://reqres.in/api/users')
            .then(response => response.json());
        yield put(userActions.getUsersRequestSuccess(json.data));
    } catch (error) {
        yield put(userActions.getUsersRequestFailure(error));
    }
}

function* actionWatcher() {
    yield takeLatest(actions.GET_USERS_DATA, fetchUsers);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}