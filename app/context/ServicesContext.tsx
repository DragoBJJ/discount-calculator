"use client"
import {createContext, ReactNode, useState} from "react";
import {CompanyData, ServiceDatabaseType} from "@/app/types";
import {companyData} from "@/app/database/calculator_database";


export type ServicesContextType = {
    servicesDatabase:  ServiceDatabaseType[]
    listOfYears: string[],
    addNewYearToList: (year: string) => void,
    addNewServicesToDatabase: (serviceData: ServiceDatabaseType) => void
}
export const ServicesContext = createContext<ServicesContextType | null >(null)

export const ServicesProvider = ({children}: ReactNode) => {
    const [servicesDatabase, setServicesToDatabase] = useState<CompanyData["servicesDatabase"]>(companyData.servicesDatabase)
    const [listOfYears, setListOfYears] = useState<string[]>(["2023", "2024", "2025"])

    const addNewYearToList = (year: string) => {
        setListOfYears([...listOfYears,year])
    }

    const addNewServicesToDatabase = (service: ServiceDatabaseType)=> {
        setServicesToDatabase([...servicesDatabase,service])
    }

    return  (
        <ServicesContext.Provider value={{
            servicesDatabase,
            addNewServicesToDatabase,
            listOfYears,
            addNewYearToList
        }}>
            {children}
        </ServicesContext.Provider>
    )
}

