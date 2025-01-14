import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";

const rootReducer = combineReducers({
  movie: movieReducer,
});

export default rootReducer;
