import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import globalReducer from "./globalReducer";
import createBlogReducer from "./createBlogReducer";

const reducer = combineReducers({
  globalReducer,
  homeReducer,
  createBlogReducer,
});

export default reducer;
