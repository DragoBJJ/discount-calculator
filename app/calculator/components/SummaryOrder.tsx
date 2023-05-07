"use client"
import {memo, useEffect, useState} from "react";
import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";

import {calculate_not_discounted_products, getCurrentRabat, getSummaryPrice} from "@/app/calculator/common/common";


export const SummaryOrder = memo<any>(() => {
    const {services} = useCompanyContext()
    const [summaryPrice,setSummaryPrice] = useState< number>(0)
    const [rabatExist, setRabatExist] = useState<boolean>(false)


    useEffect(() => {
        const {currentRabat} = getCurrentRabat(services)
        if(currentRabat) {
            // Calculation of discounted products
            setSummaryPrice(currentRabat.price["2023"])
            const {derivative_products_IDS} = currentRabat
            const summary =calculate_not_discounted_products(derivative_products_IDS, services)
            if(summary) setSummaryPrice((prevState)=> prevState + summary.price)
            setRabatExist(!!currentRabat)
        } else {
            // Calculation of products without discount
            const summary = getSummaryPrice(services)
            if(summary) setSummaryPrice(summary.price)
        }
    }, [services]);


    return (
        <div className={c.summaryOrder}>
        <p>Summary: ${summaryPrice && summaryPrice} zł </p>
        </div>
    )
})