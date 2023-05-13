"use client"

import {Service} from "@/app/components/molecules/Service";
import c from "./style.module.scss"
import {useCompanyContext, useServicesContext} from "@/app/hooks";
import {getServicesDataByYear} from "@/app/utils/services";


export const Services = () => {

    const {selectedYearData} =  useCompanyContext()
    const {servicesDatabase} = useServicesContext()

    const services = getServicesDataByYear(servicesDatabase, selectedYearData)


    console.log("servicesDatabase",servicesDatabase)

    return (
        <div className={c.services}>
            {services ? services.map((service,index)=> {

                return (
                    <Service key={index} {...service} isAddButton />
                )
            }) : <></>}
        </div>
    )
}