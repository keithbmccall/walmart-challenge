import {combineReducers} from "redux";
import * as cartReducer from './cartReducer'

interface State {
    cart: cartReducer.State
}


export const rootReducer = combineReducers<State>({
    cart: cartReducer.reducer
});

export type rootState = State;