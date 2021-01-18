import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import Reducer from "../reducer/index";

const store = createStore(Reducer, applyMiddleware(thunkMiddleware));

export default store;