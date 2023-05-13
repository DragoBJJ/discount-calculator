import {CalculateIfDiscountType, DiscountType, PriceYear, ServiceDatabaseType, ServiceTypeF} from "@/app/types";
import {
    calculate_not_discounted_services,
    getDerativeServices, getSentence,
    getServicesIDs,
    getSummaryPrice
} from "@/app/utils/services";
import React from "react";
import {discountsData} from "@/app/model/data-model";

const addBonusService = (derivative_products_IDS: number[],bonus_product: ServiceTypeF | undefined) => {
    let new_derivative_products_IDS = derivative_products_IDS
    if(bonus_product) {
         new_derivative_products_IDS = [...derivative_products_IDS, bonus_product.id]
        return {new_derivative_products_IDS, newService: bonus_product}
    } else {
        return {new_derivative_products_IDS}
    }
}

export const  calculateIfDiscountExist = ({isDiscountExist, services ,servicesDatabase ,selectedYearData}: CalculateIfDiscountType) => {
    const {currentDiscount} = isDiscountExist

    let summaryPrice = 0

    const {derivative_products_IDS, bonus_product, price} = currentDiscount
    summaryPrice += price

    const {new_derivative_products_IDS,newService} = addBonusService(derivative_products_IDS,bonus_product)

    const products_summary = calculate_not_discounted_services(new_derivative_products_IDS, services , servicesDatabase ,selectedYearData)

    if(products_summary) summaryPrice += products_summary.price

    return {derivative_products_IDS, summaryPrice, newService}
 }

  type ShoppingCartLogicType = {
        services: ServiceTypeF[],
      servicesDatabase: ServiceDatabaseType[],
      selectedYearData: string,
      setSummaryPrice: (value: number) => void,
      addNewService: (serviceData: ServiceTypeF) => void,
      setActiveServices_IDS: (value: number[]) => void
}

export const calculatorLogic = (cartLogic: ShoppingCartLogicType) => {
    const {services,servicesDatabase, setActiveServices_IDS ,setSummaryPrice ,selectedYearData ,addNewService} = cartLogic

     if(!services.length) return setSummaryPrice(0)

    const isDiscountExist = getCurrentDiscount(services,selectedYearData)

    if(isDiscountExist) {
        const {derivative_products_IDS,summaryPrice, newService}  = calculateIfDiscountExist({isDiscountExist, services , servicesDatabase ,selectedYearData})
        derivative_products_IDS.length && setActiveServices_IDS(derivative_products_IDS)
        newService && addNewService(newService)
        summaryPrice && setSummaryPrice(summaryPrice)
    } else {
        const summary = getSummaryPrice(services)
        if(summary)  setSummaryPrice(summary.price)
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

export const getCurrentDiscount = (services : ServiceTypeF[],selectedYearData: string) => {
    const currentDiscounts = discountsData.filter(({derivative_products_IDS,rabat_type,price})=> {
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
