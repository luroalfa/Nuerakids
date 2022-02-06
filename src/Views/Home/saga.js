//Libs
// import { takeLatest, put, call, all, select } from "redux-saga/effects";
import { takeLatest, all } from "redux-saga/effects";
// import { delay } from "redux-saga";
// import axios from "axios";

import CONFIG from "../../config";
const { HOME } = CONFIG.STORE.ACTIONS;

//Watcher Sagas
function* testWatcher() {
  yield takeLatest(HOME.TEST, testWorker);
}

//Worker Sagas
function* testWorker() {}

export default function* rootSaga() {
  yield all([testWatcher()]);
}
