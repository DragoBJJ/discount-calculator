"use client"
import {createContext, ReactNode, useState} from "react";
import {DiscountType, ServiceTypeF} from "@/app/types";

export type OrderLogicContextType = {
    services:  ServiceTypeF[] | []
    addNewService: (serviceData: ServiceTypeF) => void
    deleteAllServices: () => void,
    activeServices_IDs: number[],
    setActiveServices_IDS:  (value: number[]) => void,
    selectedYearData: string,
    setSelectedYearData: (PriceYear: string) => void,
    suggestedDiscounts:DiscountType[],
    setSuggestedDiscounts: (discountType: DiscountType[]) => void,
}

export const OrderLogicContext = createContext<OrderLogicContextType | null>(null)

export const OrderLogicProvider = ({children}: ReactNode) => {

    const [services,  setServices] = useState<ServiceTypeF[]>([])

    const [activeServices_IDs, setActiveServices_IDS] = useState<number[]>([])
    const [selectedYearData, setSelectedYearData] = useState<string>("2023")
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
        <OrderLogicContext.Provider value={{
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
        </OrderLogicContext.Provider>
    )
}


