import {useContext} from "react";
import {OrderLogicContext} from "@/app/context/OrderLogicContext";
import {ServicesContext} from "@/app/context/ServicesContext";


export const useOrderLogicContext = () => {
    const context = useContext(OrderLogicContext);
    if(!context) throw  new Error("CompanyContext does not exist")
    return context
}

export const useServicesContext = () => {
    const context = useContext(ServicesContext);
    if(!context) throw  new Error("Services does not exist")
    return context

}

