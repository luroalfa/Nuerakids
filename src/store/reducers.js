//Libs
import { combineReducers } from "redux";
//Reducers
import home from "../Views/Home/reducer";
import courses from "../Views/Courses/reducer";

//Root Reducer
const rootReducer = combineReducers({
  home,
  courses,
});

export default rootReducer;
