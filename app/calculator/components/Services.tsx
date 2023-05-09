"use client"

import {memo} from "react";
import {Service} from "@/app/calculator/components/Service";
import c from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";
import {getServicesDataByYear} from "@/app/calculator/common/common";



export const Services = memo<>(() => {
        const {selectedYearData} =  useCompanyContext()
        const services =  getServicesDataByYear(selectedYearData)
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