import { applyMiddleware, legacy_createStore,combineReducers } from "redux";
import thunk from "redux-thunk";
import { customerProductReducer } from "./Product/reducer";
import { orderReducer } from "./Order/reducer";

const rootReducers = combineReducers({
    product:customerProductReducer,
    orders:orderReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))