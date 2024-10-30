import { takeEvery, put } from 'redux-saga/effects';

// WORKER
function* addJobSaga(action) {
  // Giả sử bạn muốn thực hiện một số xử lý bất đồng bộ ở đây
  yield put({ type: 'ADD_JOB', payload: action.payload });
}

function* deleteJobSaga(action) {
  yield put({ type: 'DELETE_JOB', payload: action.payload });
}

function* editJobSaga(action) {
  yield put({ type: 'EDIT_JOB', payload: action.payload });
}

// WATCHER
export default function* jobsSaga() {
  yield takeEvery('ADD_JOB_REQUEST', addJobSaga);
  yield takeEvery('DELETE_JOB_REQUEST', deleteJobSaga);
  yield takeEvery('EDIT_JOB_REQUEST', editJobSaga);
}