import { applyMiddleware, combineReducers, createStore } from "redux";
import { favoriteListReducer } from "../reducers/favoriteReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
    favorite: favoriteListReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
