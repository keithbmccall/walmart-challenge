export {getPricingData} from "data-store";

// this is supposed to mimic an axios call

interface ValidCodeType {
    code: string,
    percent: number,
    isPromoApplied: boolean
}

const promoCodes: ValidCodeType[] = [
    {
        code: 'DISCOUNT',
        percent: 10,
        isPromoApplied: false
    }
]
export const validatePromoCode = async (promoCode: string) => {
    let validCode: ValidCodeType | any = {};
    promoCodes.forEach(info => {
        validCode = info.code === promoCode && info
        validCode.isPromoApplied = true
    })
    return await validCode
}
