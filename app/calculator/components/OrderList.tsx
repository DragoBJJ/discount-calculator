"use client"
import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";
import {Service} from "@/app/calculator/components/Service";
import {getActiveDiscountStyle} from "@/app/calculator/common/common";


export const OrderList = () => {
    const {services,activeServices} = useCompanyContext()

    return (
        <div className={c.orderList}>
            {services ? services.map((service,index)=>  {
                const activeServiceStyle = getActiveDiscountStyle(activeServices, service.id)
                console.log("activeServiceStyle",activeServiceStyle)
               return  <Service key={index} {...service} activeServiceStyle={activeServiceStyle} />
            }) : (<></>)
            }
        </div>
    )
}