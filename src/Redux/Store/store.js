import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../Reducer/reducer";

const reducers = combineReducers({
    notes: reducer
})

let store = createStore(reducers, applyMiddleware(thunk))
// const store = createStore(reducers);

export default store;