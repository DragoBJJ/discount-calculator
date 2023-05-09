"use client"
import {memo, useEffect, useState} from "react";
import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";
import {calculate_not_discounted_products, getCurrentRabat, getSummaryPrice} from "@/app/calculator/common/common";



export const SummaryOrder = memo<any>(() => {
    const {services ,addNewService, setActiveServices} = useCompanyContext()

    const [summaryPrice,setSummaryPrice] = useState< number>(0)


    useEffect(() => {
        const {currentRabat} = getCurrentRabat(services)
        if(currentRabat) {
            // Calculation of discounted products

                setSummaryPrice(currentRabat.price["2023"])
                const {derivative_products_IDS} = currentRabat
                let copy_derivative_products_IDS = derivative_products_IDS
            setActiveServices(derivative_products_IDS)

                if (currentRabat.bonus_product) {
                    copy_derivative_products_IDS = [...derivative_products_IDS,currentRabat.bonus_product.id]
                    addNewService({
                        ...currentRabat.bonus_product,
                        price: currentRabat.price["2023"],
                    })
                }
            const products_summary = calculate_not_discounted_products(copy_derivative_products_IDS, services)
            if (!products_summary) return
            setSummaryPrice((prevState)=> prevState + products_summary.price)

        } else {
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