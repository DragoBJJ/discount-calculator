import {CompanyData, Service} from "@/app/calculator/types";

export const servicesData: Service[] = [
    {
        name: "Internet",
        price: 39
    },
    {
        name: "Telewizja",
        price: 39
    },
    {
        name: "Abonament telefoniczny",
        price: 39
    },
    {
        name: "Dekoder 4K",
        price: 39
    }
]

export const companyData: CompanyData = [
    {
        ID: 1,
        companyName: "AlexanderSpace",
        companyOwner: "Alexander",
        serviceData: servicesData
    }
]