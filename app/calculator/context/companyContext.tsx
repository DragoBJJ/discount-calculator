"use client"
import {createContext, ReactNode, useContext, useState} from "react";
import { ServiceTypeF} from "@/app/calculator/types";



export type CompanyContextType = {
    services:  ServiceTypeF[] | []
    setCompanyServices:(serviceData: ServiceTypeF[]) => void,
    // rabat: RabatType,
    // setRabat:  (value: (((prevState: RabatType) => RabatType) | RabatType)) => void
}

const CompanyContext = createContext<CompanyContextType | null>(null)


export const CompanyProvider = ({children}: ReactNode) => {
    const [companyServices,  setCompanyServices] = useState<ServiceTypeF[] | []>([])
    // const [rabat, setRabat] = useState<RabatType>({rabatType: "NONE", rabatPrice: 0})
    return  (
        <CompanyContext.Provider value={{
            services: companyServices,
            setCompanyServices,
        }}>
            {children}
        </CompanyContext.Provider>
    )
}

export const useCompanyContext = () => {
    const context = useContext(CompanyContext);
    if(!context) throw  new Error("CompanyContext does not exist")
    return context
}
