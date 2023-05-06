"use client"

import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";
import {Service} from "@/app/calculator/components/Service";
import {rabatsData} from "@/app/calculator/data";

export const OrderList = () => {
    const {services} = useCompanyContext()

    return (
        <div className={c.orderList}>
            {services ? services.map((service,index)=>  {

               return  <Service key={index} {...service}/>
            }) : (<></>)
            }
        </div>
    )
}