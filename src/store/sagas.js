//Libs
import { all } from "redux-saga/effects";
//Sagas
import home from "../Views/Home/saga";

export default function* rootSaga() {
  yield all([home()]);
}
