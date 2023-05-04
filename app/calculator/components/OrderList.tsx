"use client"

import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";

export const OrderList = () => {
    const context = useCompanyContext()
 console.log("context",context)
    return (
        <div className={c.orderList}>
            OrderList
        </div>
    )
}