import { fork, all } from 'redux-saga/effects';
import sampleSaga from './sample-saga';

export default function* rootSaga() {
  yield all([
    fork(sampleSaga),
  ]);
}
