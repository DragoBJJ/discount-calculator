"use client"
import {memo, useCallback, useEffect, useState} from "react";
import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";
import {ServiceTypeF} from "@/app/calculator/types";
import {getCurrentRabat} from "@/app/calculator/common/common";

export const SummaryOrder = memo<any>(() => {
    const {services, rabat, setRabat} = useCompanyContext()
    const [summaryPrice,setSummaryPrice] = useState< number | undefined>(undefined)

    const getSummaryPrice = useCallback(() => {
        if(!services.length) return
        return  services.reduce((acc, nextValue
        )=> {
            acc["price"] = acc["price"] || 0
            acc["price"] += nextValue["price"]
            return acc
        }, {} as ServiceTypeF)
    }, [services])

    useEffect(() => {
        const currentRabat = getCurrentRabat(services)

        if(currentRabat) {
            setSummaryPrice(currentRabat.price["2023"])
        } else {
            const normalPrice = getSummaryPrice()
            if(normalPrice) setSummaryPrice(normalPrice.price)
        }




    }, [getSummaryPrice]);


    return (
        <div className={c.summaryOrder}>
        <p>Summary: ${summaryPrice && summaryPrice} zł </p>
        </div>
    )
})