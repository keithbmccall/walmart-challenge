import {CartItemTypes, FETCH_CART_ITEMS, APPLY_PROMO_CODE} from "../actions/cartActions";
import {CommonItemType} from "types-store";

export type State = {
    cartItems: [] | CommonItemType[],
    appliedPromoCode: {} | null
}
export const initialState: State = {
    cartItems: [],
    appliedPromoCode: null
};

export const reducer = (state: State = initialState, action: CartItemTypes) => {
    switch (action.type) {
        case FETCH_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            };
        case APPLY_PROMO_CODE:
            return{
                ...state,
                appliedPromoCode: action.payload
            }
        default:
            return state;
    }
};
