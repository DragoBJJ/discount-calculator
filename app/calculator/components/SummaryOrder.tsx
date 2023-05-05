"use client"
import {memo, useCallback, useEffect, useState} from "react";
import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";
import {ServiceTypeF} from "@/app/calculator/types";

export const SummaryOrder = memo<any>(() => {
    const {services, rabat, setRabat} = useCompanyContext()
    const [summaryPrice,setSummaryPrice] = useState< ServiceTypeF | undefined>(undefined)

    const getSummaryPrice = useCallback(() => {
        if(!services.length) return
        console.log("services",services)
        return  services.reduce((acc, nextValue
        )=> {
            acc["price"] = acc["price"] || 0
            acc["price"] += nextValue["price"]
            console.log("acc",acc)
            return acc
        }, {} as ServiceTypeF)
    }, [services])

    useEffect(() => {
        setSummaryPrice(getSummaryPrice())
        // const  data = calculateRabat(services)
    }, [getSummaryPrice]);


    return (
        <div className={c.summaryOrder}>
        <p>Summary: ${summaryPrice && summaryPrice.price} zł </p>
        </div>
    )
})