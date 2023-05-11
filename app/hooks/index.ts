import {useContext} from "react";
import {CompanyContext} from "@/app/context/companyContext";


export const useCompanyContext = () => {
    const context = useContext(CompanyContext);
    if(!context) throw  new Error("CompanyContext does not exist")
    return context
}

