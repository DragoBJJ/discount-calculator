"use client"
import {memo, useEffect, useState} from "react";
import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";

import {calculate_not_discounted_products, getCurrentRabat, getSummaryPrice} from "@/app/calculator/common/common";


export const SummaryOrder = memo<any>(() => {
    const {services} = useCompanyContext()
    const [summaryPrice,setSummaryPrice] = useState< number>(0)


    useEffect(() => {
        const {currentRabat} = getCurrentRabat(services)
        console.log("currentRabat",currentRabat)
        if(currentRabat) {
            // Calculation of discounted products
            setSummaryPrice(currentRabat.price["2023"])
            const summary =calculate_not_discounted_products(currentRabat,services)
            if(summary) setSummaryPrice((prevState)=> prevState + summary.price)
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