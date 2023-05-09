"use client"
import {createContext, ReactNode, useContext, useState} from "react";
import { ServiceTypeF} from "@/app/calculator/types";

export type CompanyContextType = {
    services:  ServiceTypeF[] | []
    addNewService: (serviceData: ServiceTypeF) => void
    activeServices: number[],
    setActiveServices:  (value: number[]) => void
}

const CompanyContext = createContext<CompanyContextType | null>(null)


export const CompanyProvider = ({children}: ReactNode) => {
    const [services,  setServices] = useState<ServiceTypeF[]>([])
    const [activeServices, setActiveServices] = useState<number[]>([])

     const addNewService = (newService: ServiceTypeF) => {
         if(services.find(service => service.id  === newService.id)) return
         setServices((prevState)=>[...prevState,newService])
    }

    return  (
        <CompanyContext.Provider value={{
            services,
            addNewService,
            activeServices,
            setActiveServices
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


