import { applyMiddleware, legacy_createStore,combineReducers } from "redux";
import thunk from "redux-thunk";
import { customerProductReducer } from "./Product/reducer";

const rootReducers = combineReducers({
    product:customerProductReducer,
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))