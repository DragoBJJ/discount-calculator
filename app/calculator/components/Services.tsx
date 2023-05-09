"use client"

import {memo} from "react";
import {Service} from "@/app/calculator/components/Service";
import c from "../../styles/variables.module.scss"
import { ServiceTypeF} from "@/app/calculator/types";
import {useCompanyContext} from "@/app/calculator/context/companyContext";



export const Services = memo<{services: ServiceTypeF[]}>(({services}) => {
        const {activeServices} =  useCompanyContext()
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