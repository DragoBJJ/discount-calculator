import {CalculateIfDiscountType, DiscountType, PriceYear, ServiceTypeF} from "@/app/types";
import {
    calculate_not_discounted_services,
    getDerativeServices, getSentence,
    getServicesIDs,
    getSummaryPrice
} from "@/app/utils/services";
import React from "react";
import {discountData} from "@/app/database/data";


const addBonusService = (derivative_products_IDS: number[],bonus_product: ServiceTypeF | undefined) => {
    let new_derivative_products_IDS = [...derivative_products_IDS]
    if(bonus_product) {
         new_derivative_products_IDS = [...new_derivative_products_IDS, bonus_product.id]
        return {new_derivative_products_IDS, newService: bonus_product}
    } else {
        return {new_derivative_products_IDS}
    }
}

export const  calculateIfDiscountExist = ({isDiscountExist,services}: CalculateIfDiscountType) => {
    const {currentDiscount} = isDiscountExist

    let summaryPrice = currentDiscount.price

    const {derivative_products_IDS, bonus_product} = currentDiscount
    const {derivative_products_IDS: new_derivative_products_IDS, newService}  = addBonusService(derivative_products_IDS, bonus_product)

    const products_summary = calculate_not_discounted_services(new_derivative_products_IDS, services)
     summaryPrice += products_summary ? products_summary.price : 0

    return {derivative_products_IDS, summaryPrice, newService}
 }

export const shoppingCartLogic = (services: ServiceTypeF[], selectedYearData: PriceYear):{newService: ServiceTypeF, summaryPrice: number, derivative_products_IDS: number[]} | {summaryPrice: number} => {
    const isDiscountExist = getCurrentDiscount(services,selectedYearData)
    if(isDiscountExist) {
        return  calculateIfDiscountExist({isDiscountExist, services})
    } else {
        const summary = getSummaryPrice(services)
        if(summary) return {summaryPrice: summary.price}
    }
}

export const showSuggestedDiscounts = (discounts: DiscountType[]) => {
    return  discounts.flatMap((discount)=> {
        const derivative_products = getDerativeServices(discount.derivative_products_IDS)
        return getSentence(derivative_products, discount.type)
    })
}

export const getActiveDiscountStyle = (activeServices: number[], service_id: number) => {
    const style: React.CSSProperties = {
        backgroundColor: "#6495ED",
        transition: "all ease-in-out 0.3s"
    }
    return activeServices && activeServices.includes(service_id) ? style : {}
}

export const getCurrentDiscount = (services : ServiceTypeF[],selectedYearData: PriceYear) => {
    const currentDiscounts = discountData.filter(({derivative_products_IDS,rabat_type,price})=> {
        const servicesIDS = getServicesIDs(services)
        const isRabat: boolean = derivative_products_IDS.every((id)=> servicesIDS.includes(id))
        return isRabat &&  {
            isRabat,
            rabat_type,
            price
        }
    })
    if(!currentDiscounts.length)  return
    const [winDiscount] = currentDiscounts.filter((discount)=> discount.bonus_product)
    const discount = winDiscount ? winDiscount : currentDiscounts[currentDiscounts.length - 1]

    return {
        currentDiscount:  {
            ...discount,
            price:discount && discount.price[selectedYearData]
        }
    }
}