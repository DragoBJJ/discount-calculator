"use client"

import {memo} from "react";
import {Service} from "@/app/components/molecules/Service";
import c from "./style.module.scss"
import {useCompanyContext} from "@/app/context/companyContext";
import {getServicesDataByYear} from "@/app/common/common";



export const Services = memo<>(() => {
    const {selectedYearData} =  useCompanyContext()
    const services = getServicesDataByYear(selectedYearData)
    return (
        <div className={c.services}>
            {services ? services.map((service,index)=> {

                return (
                    <Service key={index} {...service} />
                )
            }) : <></>}
        </div>
    )
})