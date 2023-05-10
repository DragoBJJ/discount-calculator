import {calculate_not_discounted_products, getCurrentRabat, getSummaryPrice} from "@/app/common/common";
import {CalculateIfDiscountType, PriceYear, ServiceTypeF} from "@/app/types";

export const  calculateIfDiscountExist = ({isDiscountExist,services}: CalculateIfDiscountType) => {
    const {currentDiscount} = isDiscountExist
    let summaryPrice = 0
    let newService: ServiceTypeF

    summaryPrice += currentDiscount.price
    const {derivative_products_IDS} = currentDiscount
    let copy_derivative_products_IDS = derivative_products_IDS

    if (currentDiscount.bonus_product) {
        copy_derivative_products_IDS = [...derivative_products_IDS,currentDiscount.bonus_product.id]
        newService = currentDiscount.bonus_product
    }
    const products_summary = calculate_not_discounted_products(copy_derivative_products_IDS, services)
     summaryPrice += products_summary ? products_summary.price : 0

    return {derivative_products_IDS, summaryPrice, newService}
 }

export const shoppingCartLogic = (services: ServiceTypeF[], selectedYearData: PriceYear):{newService: ServiceTypeF, summaryPrice: number, derivative_products_IDS: number[]} | {summaryPrice: number} => {
    const isDiscountExist = getCurrentRabat(services,selectedYearData)
    if(isDiscountExist) {
        return  calculateIfDiscountExist({isDiscountExist, services})
    } else {
        const summary = getSummaryPrice(services)
        if(summary) return {summaryPrice: summary.price}
    }
}
