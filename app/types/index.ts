import React from "react";

export type PriceYear =  "2023" | "2024" | "2025"

    export type ServiceDatabaseType = {
         id: number,
         name: string
        price:  Record<PriceYear | string, number>
    }

export type ShoppingCartLogicType = {
    services: ServiceTypeF[],
    servicesDatabase: ServiceDatabaseType[],
    selectedYearData: string,
    setSummaryPrice: (value: number) => void,
    addNewService: (serviceData: ServiceTypeF) => void,
    setActiveServices_IDS: (value: number[]) => void
}

    export type ServiceTypeF = {
        id: number,
        name: string
        price:  number
        activeServiceStyle?: React.CSSProperties
    }

    export type BasicDiscountType = "TV_INTERNET" | "ABONAMENT_INTERNET" | "DEKODER_INTERNET_TELEWIZJA"

    export type DiscountType = {
        type: BasicDiscountType,
        price: Record<PriceYear, number>,
        derivative_products_IDS: number[]
        bonus_product?: ServiceTypeF
    }

export type DiscountReturnType = {currentDiscount: {price: number, type: BasicDiscountType, derivative_products_IDS: number[], bonus_product?: ServiceTypeF}}

export type CalculateIfDiscountType = {
    isDiscountExist :DiscountReturnType,
    services: ServiceTypeF[]
    servicesDatabase: ServiceDatabaseType[],
    selectedYearData: string
}

   export type CompanyData = {
        companyID: number,
        companyName: string
        companyOwner: string
        servicesDatabase: ServiceDatabaseType[]
    }