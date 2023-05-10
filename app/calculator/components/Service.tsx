"use client"
import {memo} from "react";
import {MdAdd} from "react-icons/md"
import c from "../../styles/variables.module.scss"
import  {useCompanyContext} from "@/app/calculator/context/companyContext";
import { ServiceTypeF} from "@/app/calculator/types";
import {showRabatForService} from "@/app/calculator/common/common";


    export const Service = memo<ServiceTypeF>(( { id,name,price,activeServiceStyle}) => {
        const { addNewService ,services  } = useCompanyContext()

        const addServiceToOrder = (service_ID: ServiceTypeF["id"],name: ServiceTypeF["name"],price: ServiceTypeF["price"]) => {
             if(services.some(service => service.id === id )) return
             addNewService({id,name,price})
            const discounts = showRabatForService(id)
            console.log("discounts",discounts)
        }

            return (
            <div id="service" className={c.service} style={activeServiceStyle} >
                <h4 id="service_title" className={c.title}>{name}</h4>
                <p className={c.price}>{price} zł</p>
                <div className={c.buttonsWrapper}>
                    <MdAdd onClick={()=> addServiceToOrder(id, name,price)} className={c.addButton} size="25px"/>
                </div>
            </div>
        )
    })