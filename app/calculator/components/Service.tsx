"use client"
import {memo} from "react";
import {MdAdd} from "react-icons/md"
import c from "../../styles/variables.module.scss"
import {Service} from "@/app/calculator/types";
import  {useCompanyContext} from "@/app/calculator/context/companyContext";

    export const Service = memo<Service>(({name,price}) => {
        const {setCompanyServices,services} = useCompanyContext()

        const addService = (name: Service["name"],price: Service["price"]) => {
             if(services.some(service => service.name === name )) return
            setCompanyServices([...services,{name,price}])
        }

        return (
            <div id="service" className={c.service}>
                <h4 id="service_title" className={c.title}>{name}</h4>
                <p className={c.price}>{price} zł</p>
                <div className={c.buttonsWrapper}>
                    <MdAdd onClick={()=> addService(name,price)} className={c.addButton} size="25px"/>
                </div>
            </div>
        )
    })