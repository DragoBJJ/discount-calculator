import {CompanyData, PriceYear, ServiceDatabaseType} from "@/app/types";
export const selectListData: PriceYear[] = ["2023","2024","2025"]

export const AlexanderServicesData: ServiceDatabaseType[] = [
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

export const companyData: CompanyData = {
        companyID: 1,
        companyName: "AlexanderSpace",
        companyOwner: "Alexander",
        servicesDatabase: AlexanderServicesData
    }

