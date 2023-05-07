import {RabatType, ServiceTypeF} from "@/app/calculator/types";
import {rabatsData, servicesData} from "@/app/calculator/data";

export const getSummaryPrice = (services: ServiceTypeF[])  => {
    if(!services.length) return
    return  services.reduce((acc, nextValue
    )=> {
        acc["price"] = acc["price"] || 0
        acc["price"] += nextValue["price"]
        return acc
    }, {} as ServiceTypeF)
}

export const getCurrentRabat = (services : ServiceTypeF[]) => {
   const currentRabats = rabatsData.filter(({derivative_products_IDS,rabat_type,price})=> {
        const servicesIDS = services.map((service)=> service.id)
        const isRabat: boolean = derivative_products_IDS.every((id)=> servicesIDS.includes(id))
        return   isRabat &&  {
            isRabat,
            rabat_type,
            price
        }
    })
    if(currentRabats.length > 1) {
        const lastRabat = currentRabats[currentRabats.length - 1]
        return {
            currentRabat: lastRabat,
        }
    }
    return  {
        currentRabat: currentRabats[0],
    }
}

export const showRabatForService = (service_ID : ServiceTypeF["id"]) => {
return rabatsData.filter(({derivative_products_IDS})=>  {
      const index = derivative_products_IDS.indexOf(service_ID)
      if(index > -1) return [...derivative_products_IDS].splice(index,1)
  })
}

export const get_not_discounted_products =(currentRabat: RabatType, services: ServiceTypeF[]) => {
    const derivative_products_IDS =currentRabat.derivative_products_IDS
    const servicesIDS = services.map((service)=> service.id)
    const services_ID = servicesIDS.filter((service)=> !derivative_products_IDS.includes(service))
    console.log("services_ID",services_ID)
    let not_discounted_product = servicesData.filter((service)=> services_ID.includes(service.id))
    const not_discounted_productF:ServiceTypeF[]  = not_discounted_product.map((product)=> {
        return {
            ...product,
            price: product.price["2023"]
        }
    })
   return not_discounted_productF
}

export const calculate_not_discounted_products = (currentRabat: RabatType, services: ServiceTypeF[]) => {
  const  not_discounted_productF =  get_not_discounted_products(currentRabat, services)
    return getSummaryPrice(not_discounted_productF)
}