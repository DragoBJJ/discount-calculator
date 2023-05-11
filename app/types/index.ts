import React from "react";

export type PriceYear =  "2023" | "2024" | "2025"

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
        activeServiceStyle?: React.CSSProperties
    }

    export type BasicType = "TV_INTERNET" | "ABONAMENT_INTERNET" | "DEKODER_INTERNET_TELEWIZJA"

    export type DiscountType = {
        type: BasicType
        price: {
            "2023": number,
            "2024": number,
            "2025": number,
        }
        derivative_products_IDS: number[]
        bonus_product?: ServiceTypeF
    }

export type DiscountReturnType = {currentDiscount: {price: number, type: BasicType, derivative_products_IDS: number[], bonus_product?: ServiceTypeF}}

export type CalculateIfDiscountType = {
    isDiscountExist :DiscountReturnType,
    services: ServiceTypeF[]
}

   export type CompanyData = {
        ID: number,
        companyName: string
        companyOwner: string
        serviceData: ServiceType[]
    }