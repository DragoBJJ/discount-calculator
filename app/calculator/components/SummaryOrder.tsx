"use client"
import {memo, useEffect, useState} from "react";
import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";
import {calculate_not_discounted_products, getCurrentRabat, getSummaryPrice} from "@/app/calculator/common/common";



export const SummaryOrder = memo<any>(() => {
    const {services ,addNewService, setActiveServices, selectedYearData} = useCompanyContext()
    const [summaryPrice,setSummaryPrice] = useState< number>(0)


    useEffect(() => {
        const isDiscountExist = getCurrentRabat(services,selectedYearData)
        if(isDiscountExist) {
            const {currentDiscount} = isDiscountExist
            // Calculation of discounted products

                setSummaryPrice(currentDiscount.price)
                const {derivative_products_IDS} = currentDiscount
                let copy_derivative_products_IDS = derivative_products_IDS
            setActiveServices(derivative_products_IDS)

                if (currentDiscount.bonus_product) {
                    copy_derivative_products_IDS = [...derivative_products_IDS,currentDiscount.bonus_product.id]
                    addNewService({
                        ...currentDiscount.bonus_product,
                    })
                }
            const products_summary = calculate_not_discounted_products(copy_derivative_products_IDS, services)
            if (!products_summary) return
            setSummaryPrice((prevState)=> prevState + products_summary.price)

        } else {
            const summary = getSummaryPrice(services)
            if(summary) setSummaryPrice(summary.price)
        }

    }, [addNewService, selectedYearData, services, setActiveServices]);



    return (
        <div className={c.summaryOrder}>
        <p>Summary: ${summaryPrice && summaryPrice} zł </p>
        </div>
    )
})