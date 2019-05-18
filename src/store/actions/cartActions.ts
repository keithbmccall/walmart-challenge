import {ThunkDispatch} from "redux-thunk";
import API from 'helpers/api'
import {CommonItemType} from "types-store";
//
//
// ACTION TYPES
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS";
export const APPLY_PROMO_CODE = "APPLY_PROMO_CODE";

interface FetchCartItemType {
    type: typeof FETCH_CART_ITEMS,
    payload: CommonItemType[]
}

interface ApplyPromoCodeType {
    type: typeof APPLY_PROMO_CODE,
    payload: {
        isPromoApplied: boolean,
        percent: number,
        code: string
    }
}

export const fetchCartItems = () => async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    const cartItems = [await API.getPricingData()];
    dispatch({
        type: FETCH_CART_ITEMS,
        payload: cartItems
    })
};
export const applyPromoCode = (promoCode: string) => async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    const appliedPromo = await API.validatePromoCode(promoCode)
    dispatch({
        type: APPLY_PROMO_CODE,
        payload: appliedPromo
    })
}

export type CartItemTypes = FetchCartItemType | ApplyPromoCodeType