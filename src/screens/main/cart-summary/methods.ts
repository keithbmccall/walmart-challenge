import {CommonItemPricingType, CommonItemType} from "types-store";


export const calculateTotals = (cartItems: CommonItemType[], appliedPromoCode: object | any): CommonItemPricingType => {
    const initialObject: CommonItemPricingType = {
        savings: 0,
        tax: 0,
        subtotal: 0,
        zip: 0,
        total: 0
    }
    const totalsObject = cartItems.reduce((acc: CommonItemPricingType, cur: CommonItemType) => {
        const {savings, zip, tax, total, subtotal} = cur.pricing;
        return {
            savings: acc.savings + savings,
            zip: zip,
            tax: acc.tax + tax,
            subtotal: acc.subtotal + subtotal,
            total: acc.total + total
        }
    }, initialObject)
    if (appliedPromoCode) {
        totalsObject.total = totalsObject.total - (totalsObject.total * appliedPromoCode.percent) / 100
    }
    return totalsObject
}