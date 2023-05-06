"use client"

import {memo} from "react";
import {Service} from "@/app/calculator/components/Service";
import c from "../../styles/variables.module.scss"
import { ServiceTypeF} from "@/app/calculator/types";
import {showRabatForService} from "@/app/calculator/common/common";



export const Services = memo<{services: ServiceTypeF[]}>(({services}) => {


    return (
        <div className={c.services}>
            {services ? services.map((service,index)=> {
                return (
                    <Service key={index} {...service}/>
                )
            }) : <></>}
        </div>
    )
})