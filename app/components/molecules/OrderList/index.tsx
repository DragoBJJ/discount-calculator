"use client"
import style from "./style.module.scss"
import {useCompanyContext} from "@/app/context/companyContext";
import {Service} from "@/app/components/molecules/Service";
import {getActiveDiscountStyle} from "@/app/common/common";


export const OrderList = () => {
    const {services,activeServices} = useCompanyContext()

    return (
        <div className={style.orderList}>
            {services ? services.map((service,index)=>  {
                const activeServiceStyle = getActiveDiscountStyle(activeServices, service.id)
                return  <Service key={index} {...service} activeServiceStyle={activeServiceStyle} />
            }) : (<></>)
            }
        </div>
    )
}