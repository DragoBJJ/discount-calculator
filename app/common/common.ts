import {DiscountType, PriceYear, ServiceType, ServiceTypeF} from "@/app/types";
import {discountData, AlexanderServicesData} from "@/app/database/data";
import React from "react";

export const getServicesDataByYear = (year: PriceYear) => {
    return  AlexanderServicesData.map((data)=> {
        return {
            ...data,
            price: data.price[year]
        }
    })
}

export const getSummaryPrice = (services: ServiceTypeF[])  => {
    if(!services.length) return
    return  services.reduce((acc, nextValue
    )=> {
        acc["price"] = acc["price"] || 0
        acc["price"] += nextValue["price"]
        return acc
    }, {} as ServiceTypeF)
}

export const getServicesIDs = (services: ServiceTypeF[]) => services.map((service)=> service.id)

export const getCurrentRabat = (services : ServiceTypeF[],selectedYearData: PriceYear) => {
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

export const removeDuplicates = (services_IDs : number[]) =>  [...new Set(services_IDs)]

export const showDiscountsForService = (service_ID : ServiceTypeF["id"]) => {
const  derivative_products = discountData.filter(({derivative_products_IDS})=> derivative_products_IDS.includes(service_ID))
        return derivative_products.map((product)=> {
            const elimination_of_my_id = product.derivative_products_IDS.filter((id)=> id !== service_ID)
            return {
                ...product,
                derivative_products_IDS: elimination_of_my_id
            }
        })


}

export const get_not_discounted_services_ids = (services: ServiceTypeF[], derivative_products_IDS: number[]) => {
    if(!derivative_products_IDS) return []
    const servicesIDS = getServicesIDs(services)
    return servicesIDS.filter((service)=> !derivative_products_IDS.includes(service))
}

export const get_not_discounted_services =(derivative_products_IDS: number[], services: ServiceTypeF[]) => {
        const services_IDS = get_not_discounted_services_ids(services, derivative_products_IDS)
    if(!services_IDS) return []
    let not_discounted_product = AlexanderServicesData.filter((service)=> services_IDS.includes(service.id))
    return  not_discounted_product.map((product)=> {
        return {
            ...product,
            price: product.price["2023"]
        }
    })
}

export const calculate_not_discounted_products = (derivative_products_IDS: number[], services: ServiceTypeF[]) => {
  const  not_discounted_productsF = get_not_discounted_services(derivative_products_IDS, services)
    if(not_discounted_productsF.length > 0) return getSummaryPrice(not_discounted_productsF)
    return null
}

export const getActiveDiscountStyle = (activeServices: number[], service_id: number) => {
    const style: React.CSSProperties = {
        backgroundColor: "#6495ED",
        transition: "all ease-in-out 0.3s"
    }
    return activeServices && activeServices.includes(service_id) ? style : {}
}

const getDerativeServices = (derivative_products_IDS: number[]) => {
    // const  discountsIDs = removeDuplicates(discounts.flatMap(discount => discount.derivative_products_IDS))
    return AlexanderServicesData.filter((service)=> derivative_products_IDS.includes(service.id))
}

export const getSentence = (derivative_products: ServiceType[],discountType: DiscountType["type"]) => {
    let success = ""
      success += derivative_products.map((service) => `${service.name}`)
    return   {
        title: `If you add ${success} yo will have ${discountType} discount`
    }
}

export const showSuggestedDiscounts = (discounts: DiscountType[]) => {
   return  discounts.flatMap((discount)=> {
       const derivative_products = getDerativeServices(discount.derivative_products_IDS)
       return getSentence(derivative_products, discount.type)
   })
}