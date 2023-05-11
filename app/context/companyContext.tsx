"use client"
import {createContext, ReactNode, useState} from "react";
import {DiscountType, PriceYear, ServiceTypeF} from "@/app/types";

export type CompanyContextType = {
    services:  ServiceTypeF[] | []
    addNewService: (serviceData: ServiceTypeF) => void
    deleteAllServices: () => void,
    activeServices_IDs: number[],
    setActiveServices_IDS:  (value: number[]) => void,
    selectedYearData: PriceYear,
    setSelectedYearData: (PriceYear: PriceYear) => void,
    suggestedDiscounts:DiscountType[],
    setSuggestedDiscounts: (discountType: DiscountType[]) => void,
}

export const CompanyContext = createContext<CompanyContextType | null>(null)

export const CompanyProvider = ({children}: ReactNode) => {

    const [services,  setServices] = useState<ServiceTypeF[]>([])

    const [activeServices_IDs, setActiveServices_IDS] = useState<number[]>([])
    const [selectedYearData, setSelectedYearData] = useState<PriceYear>("2023")
    const [suggestedDiscounts,setSuggestedDiscounts] = useState<DiscountType[]>([])

     const addNewService = (newService: ServiceTypeF) => {
         if(services.find(service => service.id  === newService.id)) return
         setServices((prevState)=>[...prevState,newService])
    }

    const deleteAllServices = () => {
        setServices([])
        setSuggestedDiscounts([])
        setActiveServices_IDS([])
    }

    return  (
        <CompanyContext.Provider value={{
            services,
            addNewService,
            activeServices_IDs,
            setActiveServices_IDS,
            selectedYearData,
            setSelectedYearData,
            suggestedDiscounts,
            setSuggestedDiscounts,
            deleteAllServices
        }}>
            {children}
        </CompanyContext.Provider>
    )
}


