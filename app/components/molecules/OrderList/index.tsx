"use client"
import style from "./style.module.scss"
import {useOrderLogicContext} from "@/app/hooks";
import {Service} from "@/app/components/molecules/Service";
import {getActiveDiscountStyle} from "@/app/utils/discountsLogic";

export const OrderList = () => {
    const {services,activeServices_IDs} = useOrderLogicContext()

    return (
        <div className={style.orderList}>
            {services ? services.map((service,index)=>  {
                const activeServiceStyle = getActiveDiscountStyle(activeServices_IDs, service.id)
                return  <Service key={index} {...service} activeServiceStyle={activeServiceStyle} />
            }) : (<></>)
            }
        </div>
    )
}