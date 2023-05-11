"use client"
import {useEffect, useMemo, useState} from "react";
import c from  "./style.module.scss"
import {useCompanyContext} from "@/app/hooks";
import {calculatorLogic} from "@/app/utils/discountsLogic";
import {Header} from "@/app/components/atoms/Header";
import {AiOutlineDelete} from "react-icons/ai"
import {IconButton} from "@/app/components/atoms/AddButton";

export const SummaryOrder = (() => {
    const {services ,addNewService, deleteAllServices , setActiveServices_IDS, selectedYearData} = useCompanyContext()
    const [summaryPrice,setSummaryPrice] = useState< number>(0)

   const calculatorLogicProps = useMemo(() =>  {
       return (
           {
               setActiveServices_IDS,
               addNewService,
               setSummaryPrice,
               services,
               selectedYearData
           }
       )
   }, [setActiveServices_IDS,
        addNewService,
        setSummaryPrice,
        services,
        selectedYearData]);

    useEffect(() => calculatorLogic(calculatorLogicProps)
    , [calculatorLogicProps]);

    return (
        <div className={c.summaryOrder}>
           <Header title={`Summary: ${summaryPrice} zł `} isLarge />
            {services.length  ?  <IconButton iconSize="25px" Icon={AiOutlineDelete} onClick={() => deleteAllServices()} /> : <></>}
        </div>
    )
})