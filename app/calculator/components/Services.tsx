import {memo} from "react";
import {Service} from "@/app/calculator/components/Service";
import c from "../../styles/variables.module.scss"


type ServicesType = {
    services: Service[]
}

export const Services = memo<ServicesType>(({services}) => {
    return (
        <div className={c.services}>
            {services ? services.map((service)=> {
                return (
                    <Service key={service.name} name={service.name} price={service.price}/>
                )
            }) : <></>}
        </div>
    )
})