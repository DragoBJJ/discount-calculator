"use client"
import {memo, useCallback, useEffect, useState} from "react";
import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";
import {Service} from "@/app/calculator/types";

export const SummaryOrder = memo<any>(() => {
    const {services} = useCompanyContext()

    const [summaryPrice,setSummaryPrice] = useState<Service | null>(null)

    const getSummaryPrice = useCallback(() => {
        if(!services.length) return
        return  services.reduce((acc, nextValue
        )=> {
            acc["price"] = acc["price"] ? acc["price"] : 0
            acc["price"] += nextValue.price
            return acc
        },{} as Record<"price", number>)
    }, [services])

    useEffect(() => {
        setSummaryPrice(getSummaryPrice())
    }, [getSummaryPrice]);


    return (
        <div className={c.summaryOrder}>
        <p>Summary: ${summaryPrice && summaryPrice.price} zł </p>
        </div>
    )
})