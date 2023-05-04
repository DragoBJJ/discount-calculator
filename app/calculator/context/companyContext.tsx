"use client"
import {createContext, ReactNode, useContext, useState} from "react";
import { Service} from "@/app/calculator/types";


export type CompanyContextType = {
    ID: number,
    companyName: string,
    companyOwner: string,
    services:  Service[] | []
    setCompanyServices:(serviceData: Service[]) => void
}

const CompanyContext = createContext<CompanyContextType | null>(null)


export const CompanyProvider = ({children}: ReactNode) => {
    const [companyServices,  setCompanyServices] = useState<CompanyContextType["services"]>([])
    return  (
        <CompanyContext.Provider value={{
            ID: 1,
            companyName: "AlexanderSpace",
            companyOwner: " Alexander",
            services: companyServices,
            setCompanyServices
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
