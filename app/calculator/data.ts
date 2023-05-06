import {CompanyData, RabatType, ServiceType} from "@/app/calculator/types";



export const servicesData: ServiceType[] = [
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
            "2024": 59,
            "2025": 69
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

export const rabatsData: RabatType[] = [
    {
        rabat_type: "TV_INTERNET",
        price: {
            "2023": 79,
            "2024": 89,
            "2025": 99,
        },
        derivative_products_IDS: [1,2]
    },
    {
        rabat_type: "ABONAMENT_INTERNET",
        price: {
            "2023": 79,
            "2024": 89,
            "2025": 99,
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

export const companyData: CompanyData = [
    {
        ID: 1,
        companyName: "AlexanderSpace",
        companyOwner: "Alexander",
        serviceData: servicesData
    }
]