import {memo} from "react";
import c from "./style.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";

type FavorableDiscountsType = {
activeServices? : number[]
}

export const FavorableDiscounts = memo<FavorableDiscountsType>(()=> {
    const {activeServices} = useCompanyContext()
    console.log("activeServices",activeServices)
    return (
        <div className={c.favorableWrapper}>
            {activeServices && activeServices.map((id)=> {
             return (
                 <p key={id}>{id}</p>
             )
            })}
        </div>
    );
})