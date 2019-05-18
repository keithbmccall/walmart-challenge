interface CommonItem {
    pricing: {
        subtotal: number,
        savings: number,
        tax: number,
        total: number,
        zip: number
    },
    itemDetails: {
        item_name: string,
        quantity: number
    }
}

export type CommonItemType = CommonItem
