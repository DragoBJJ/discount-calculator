
import {ServiceTypeF} from "@/app/types";
import {MdOutlineAdd} from "react-icons/md"

import c from "./style.module.scss"
import {useCompanyContext} from "@/app/hooks";
import {getActiveDiscountStyle} from "@/app/utils/discountsLogic";
import {showDiscountsForService} from "@/app/utils/services";
import {memo} from "react";
import {Header} from "@/app/components/atoms/Header";

import {IconButton} from "@/app/components/atoms/AddButton";

type ServiceComponentType = {
   isAddButton?: boolean
} & ServiceTypeF

export const Service = memo<ServiceComponentType>(({id,name,price,isAddButton}: ServiceTypeF) => {
    const {addNewService ,activeServices_IDs, setSuggestedDiscounts} = useCompanyContext()

    const addServiceLogic = (id: ServiceTypeF["id"],name: ServiceTypeF["name"],price: ServiceTypeF["price"]) => {
        addNewService({id,name,price})
        setSuggestedDiscounts(showDiscountsForService(id))
    }

    return (
        <div className={c.service} style={getActiveDiscountStyle(activeServices_IDs, id)}>
            <Header title={name} className={c.title} />
            <Header title={`${price} zł`} className={c.price} />
            {isAddButton && (
             <IconButton Icon={MdOutlineAdd} onClick={()=> addServiceLogic(id,name,price)}  />
            )}
        </div>
    )
})