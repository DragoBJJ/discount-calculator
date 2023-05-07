import {CompanyData} from "@/app/calculator/types";
export const companyData: CompanyData = [
    {
        ID: 1,
        companyName: "AlexanderSpace",
        companyOwner: "Alexander",
        serviceData: servicesData
    }
]
export const servicesData = companyData.flatMap(({serviceData})=>serviceData)