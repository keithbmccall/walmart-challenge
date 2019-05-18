interface CommonItem {
    pricing: ItemPricing,
    itemDetails: {
        item_name: string,
        quantity: number,
        image: string
    }
}

interface ItemPricing {
    subtotal: number,
    savings: number,
    tax: number,
    total: number,
    zip: number
}

export type CommonItemType = CommonItem;
export type CommonItemPricingType = ItemPricing
