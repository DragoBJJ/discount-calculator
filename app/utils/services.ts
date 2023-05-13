import {DiscountType, PriceYear, ServiceDatabaseType, ServiceTypeF} from "@/app/types";
import {discountsData} from "@/app/model/data-model";
import {AlexanderServicesData} from "@/app/database/calculator_database";

export const getServicesIDs = (services: ServiceTypeF[]) => services.map((service)=> service.id)

export const removeDuplicates = (services_IDs : number[]) =>  [...new Set(services_IDs)]

export const showDiscountsForService = (service_ID : ServiceTypeF["id"]) => {
    const  derivative_products = discountsData.filter(({derivative_products_IDS})=> derivative_products_IDS.includes(service_ID))
    return derivative_products.map((product)=> {
        const elimination_of_my_id = product.derivative_products_IDS.filter((id)=> id !== service_ID)
        return {
            ...product,
            derivative_products_IDS: elimination_of_my_id
        }
    })
}

export const getServicesDataByYear = (servicesDatabase:ServiceDatabaseType[], year: string) => {
    return servicesDatabase.map((data)=> {
        return {
            ...data,
            price: data.price[year]
        }
    })

}


export const get_not_discounted_services_ids = (services: ServiceTypeF[], derivative_products_IDS: number[]) => {
    if(!derivative_products_IDS) return []
    const servicesIDS = getServicesIDs(services)
    return servicesIDS.filter((service)=> !derivative_products_IDS.includes(service))
}

export const get_not_discounted_services =(derivative_products_IDS: number[], services: ServiceTypeF[] ,servicesDatabase: ServiceTypeF[]) => {
    const services_IDS = get_not_discounted_services_ids(services, derivative_products_IDS)
    if(!services_IDS) return []
    return  servicesDatabase.filter((service)=> services_IDS.includes(service.id))
}

export const calculate_not_discounted_services = (derivative_products_IDS: number[], services: ServiceTypeF[],servicesDatabase: ServiceDatabaseType[],selectedYearData: string) => {
    const  servicesWithCorrectYear = servicesDatabase.map((service)=>  {
        return {
            ...service,
            price: service.price[selectedYearData as PriceYear]
        }
    })
    const  not_discounted_productsF = get_not_discounted_services(derivative_products_IDS, services, servicesWithCorrectYear)
    if(not_discounted_productsF.length > 0) return getSummaryPrice(not_discounted_productsF)
    return null
}

export const getDerativeServices = (derivative_products_IDS: number[]) => {
   return  AlexanderServicesData.filter((service)=> derivative_products_IDS.includes(service.id))
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

export const getSentence = (derivative_products: ServiceDatabaseType[],discountType: DiscountType["type"]) => {
    let allServices = ""
    allServices += derivative_products.map((service) => ` ${service.name}`)
    return   {
        title: `If you add ${allServices} yo will have ${discountType} discount`
    }
}
