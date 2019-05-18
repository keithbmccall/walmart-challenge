const pricingData = {
    pricing: {
        subtotal: 102.96,
        savings: 3.85,
        tax: 8.92,
        total: 108.03,
        zip: 85050
    },
    itemDetails: {
        item_name: "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
        quantity: 1
    }
};

export const getPricingData = (delay = 1000) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(pricingData)
        }, delay)
    });
};