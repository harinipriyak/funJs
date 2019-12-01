import { call, takeEvery, put } from 'redux-saga/effects';
import { GET_EMPLOYEE_NAME } from '../actions/types';
import { updateemployeeName } from '../actions';
import { getemployeeNameApi } from '../api/sample-api';

export const getemployeeNameSaga = function* (action) {
  try {
    const response = yield call(getemployeeNameApi, action.keyword);
    yield put(updateemployeeName(response.employee_name));
  } catch (error) {
    yield put(updateemployeeName(null));
  }
};

export default function* sampleSaga() {
  yield takeEvery(GET_EMPLOYEE_NAME, getemployeeNameSaga);
}
