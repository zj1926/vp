import { takeLatest } from 'redux-saga/effects';
import { call, put, fork } from 'redux-saga/effects';
import requester from '../services/requester';
import { createAction } from 'redux-actions';

function* initAuth() {
  try {
    const payload = yield call(requester, '/api/getInitAuth');
    yield put({
      type: "user/initAuth/success",
      payload,
    });
  } catch (e) {
    yield put({
      type: "user/initAuth/fail",
      payload: {msg: e}
    });
  }
}

function* logoff(action) {
  yield call(requester, '/api/logoff');
}

function* onOAuth(action) {
  window.location.replace(action.payload);
}

function* watchers(a) {
  yield takeLatest("user/logoff", logoff);
  yield takeLatest("user/initAuth", initAuth);
  yield takeLatest('user/onOAuth', onOAuth)
}

export default function*(){
  yield fork(watchers);
}