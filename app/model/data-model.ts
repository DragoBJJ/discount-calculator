import {DiscountType} from "@/app/types";

export const discountsModel: DiscountType[] = [
    {
        type: "TV_INTERNET",
        price: {
            "2023": 79,
            "2024": 89,
            "2025": 99,
        },
        derivative_products_IDS: [1,2],
        bonus_product:  {
            id: 4,
            name: "Dekoder 4K",
            price: 29
        }
    },
    {
        type: "ABONAMENT_INTERNET",
        price: {
            "2023": 64,
            "2024": 64,
            "2025": 64,
        },
        derivative_products_IDS: [1,3]
    },
    {
        type: "DEKODER_INTERNET_TELEWIZJA",
        price: {
            "2023": 79,
            "2024": 89,
            "2025": 99,
        },
        derivative_products_IDS: [1,2,4]
    }
]
