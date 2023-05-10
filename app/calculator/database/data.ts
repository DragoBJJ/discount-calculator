import {DiscountType, ServiceType} from "@/app/calculator/types";



export const AlexanderServicesData: ServiceType[] = [
    {
        id: 1,
        name: "Internet",
        price:  {
            "2023": 39,
            "2024": 49,
            "2025": 59
        }
    },
    {
        id: 2,
        name: "Telewizja",
        price:  {
            "2023": 49,
            "2024": 49,
            "2025": 59
        }
    },
    {
        id: 3,
        name: "Abonament telefoniczny",
        price:  {
            "2023": 29,
            "2024": 29,
            "2025": 29
        }
    },
    {
        id: 4,
        name: "Dekoder 4K",
        price:  {
            "2023": 29,
            "2024": 29,
            "2025": 29
        }
    }
]

export const discountData: DiscountType[] = [
    {
        rabat_type: "TV_INTERNET",
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
        rabat_type: "ABONAMENT_INTERNET",
        price: {
            "2023": 64,
            "2024": 64,
            "2025": 64,
        },
        derivative_products_IDS: [1,3]
    },
    {
        rabat_type: "DEKODER_INTERNET_TELEWIZJA",
        price: {
            "2023": 79,
            "2024": 89,
            "2025": 99,
        },
        derivative_products_IDS: [1,2,4]
    }
]
