import {ServiceType, ServiceTypeF} from "@/app/calculator/types";
import {rabatsData} from "@/app/calculator/data";

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
    if(currentRabats.length > 1) return currentRabats[currentRabats.length - 1]
    return currentRabats[0]
}

export const showRabatForService = (service_ID : ServiceTypeF["id"]) => {
return rabatsData.filter(({derivative_products_IDS})=>  {
      const index = derivative_products_IDS.indexOf(service_ID)
      if(index > -1) return [...derivative_products_IDS].splice(index,1)
  })
}