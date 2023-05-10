"use client"
import { useEffect, useState} from "react";
import c from  "./style.module.scss"
import {useCompanyContext} from "@/app/context/companyContext";
import {shoppingCartLogic} from "@/app/common/discountLogic";

export const SummaryOrder = (() => {
    const {services ,addNewService, setActiveServices, selectedYearData} = useCompanyContext()
    const [summaryPrice,setSummaryPrice] = useState< number>(0)

    const SummaryOrderLogic = () => {
        const discountData = shoppingCartLogic(services,selectedYearData)
        if(discountData) {
            const {derivative_products_IDS,newService,summaryPrice} = discountData
            derivative_products_IDS && setActiveServices(derivative_products_IDS)
            newService && addNewService(newService)
            summaryPrice && setSummaryPrice(summaryPrice)
        }
    }

    useEffect(() => {
        SummaryOrderLogic()
    }, [addNewService, selectedYearData, services, setActiveServices]);

    return (
        <div className={c.summaryOrder}>
            <p>Summary: {summaryPrice && summaryPrice} zł </p>
        </div>
    )
})