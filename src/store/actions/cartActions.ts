import {ThunkDispatch} from "redux-thunk";
import API from 'helpers/api'
import {CommonItemType} from "types-store";
//
// ACTION TYPES
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS";


interface FetchCartItemType {
    type: typeof FETCH_CART_ITEMS,
    payload: CommonItemType[]
}


export const fetchCartItems = () => async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    const cartItems = [await API.getPricingData()];
    dispatch({
        type: FETCH_CART_ITEMS,
        payload: cartItems
    })
};


export type CartItemTypes = FetchCartItemType