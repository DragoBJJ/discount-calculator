"use client"
import {createContext, ReactNode, useContext, useState} from "react";
import {CompanyData} from "@/app/calculator/types";


type CompanyContextType = {
    ID: number,
    companyName: string,
    companyOwner: string,
    services: CompanyData | []
    setCompanyData: (value: (((prevState: Omit<CompanyContextType, "setServices">) => Omit<CompanyContextType, "setServices">))) => void
}

const CompanyContext = createContext<CompanyContextType | null>(null)


export const CompanyProvider = ({children}: ReactNode) => {
    const [companyData, setCompanyData] = useState<Omit<CompanyContextType,"setCompanyData">>({
        ID: 1,
        companyName: "AlexanderSpace",
        companyOwner:" Alexander",
        services: []
    })
    return  (
        <CompanyContext.Provider value={{
            ID: 1,
            companyName: "AlexanderSpace",
            companyOwner: " Alexander",
            services: companyData.services,
            setCompanyData
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
