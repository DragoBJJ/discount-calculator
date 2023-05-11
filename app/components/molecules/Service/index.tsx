
import {ServiceTypeF} from "@/app/types";
import {MdOutlineAdd} from "react-icons/md"

import c from "./style.module.scss"
import {useCompanyContext} from "@/app/context/companyContext";
import {getActiveDiscountStyle} from "@/app/utils/discountsLogic";
import {showDiscountsForService} from "@/app/utils/services";

export const Service = ({id,name,price}: ServiceTypeF) => {
    const {addNewService ,activeServices, setSuggestedDiscounts} = useCompanyContext()

    const addServiceLogic = (id: ServiceTypeF["id"],name: ServiceTypeF["name"],price: ServiceTypeF["price"]) => {
        addNewService({id,name,price})
        setSuggestedDiscounts(showDiscountsForService(id))
    }

    return (
        <div className={c.service} style={getActiveDiscountStyle(activeServices, id)}>
            <p className={c.title}>{name}</p>
            <p className={c.price}>{price}</p>
            <div className={c.buttonsWrapper}>
                  <MdOutlineAdd className={c.addButton} onClick={()=> addServiceLogic(id,name,price)}/>
            </div>
        </div>
    )
}