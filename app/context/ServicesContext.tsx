"use client"
import {createContext, ReactNode, useState} from "react";
import {CompanyData, ServiceDatabaseType} from "@/app/types";
import {companyData} from "@/app/database/calculator_database";


export type ServicesContextType = {
    servicesDatabase:  ServiceDatabaseType[]
    addNewServicesToDatabase: (serviceData: ServiceDatabaseType[]) => void
}
export const ServicesContext = createContext<ServicesContextType | null >(null)

export const ServicesProvider = ({children}: ReactNode) => {
    const [servicesDatabase, addNewServicesToDatabase] = useState<CompanyData["servicesDatabase"]>(companyData.servicesDatabase)

    return  (
        <ServicesContext.Provider value={{
            servicesDatabase,
            addNewServicesToDatabase
        }}>
            {children}
        </ServicesContext.Provider>
    )
}

