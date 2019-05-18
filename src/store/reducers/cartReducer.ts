import {CartItemTypes, FETCH_CART_ITEMS} from "../actions/cartActions";
import {CommonItemType} from "types-store";

export type State = {
    cartItems: CommonItemType[]
}
export const initialState: State = {
    cartItems: []
};

export const reducer = (state: State = initialState, action: CartItemTypes) => {
    switch (action.type) {
        case FETCH_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            };
        default:
            return state;
    }
};
