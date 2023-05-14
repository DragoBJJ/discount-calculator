"use client"

import {Service} from "@/app/components/molecules/Service";
import c from "./style.module.scss"
import {useOrderLogicContext, useServicesContext} from "@/app/hooks";
import {getServicesDataByYear} from "@/app/utils/services";


export const Services = () => {

    const { servicesDatabase} =  useServicesContext()
    const {selectedYearData} = useOrderLogicContext()

    const services = getServicesDataByYear(servicesDatabase, selectedYearData)


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