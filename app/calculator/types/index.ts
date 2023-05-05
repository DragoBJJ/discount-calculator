

    export type ServiceType = {
         id: number,
         name: string
        price: {
            "2023": number,
            "2024": number,
            "2025": number,
        }
    }

    export type ServiceTypeF = {
        id: number,
        name: string
        price:  number
    }

    export type RabatType = {
        rabat_type: "TV" | "ABONAMENT" | "DEKODER"
        price: {
            "2023": number,
            "2024": number,
            "2025": number,
        }
        derivative_products_IDS: number[]
    }

   export type CompanyData = {
        ID: number,
        companyName: string
        companyOwner: string
        serviceData: ServiceType[]
    }[]