"use client"
import {memo} from "react";
import {MdAdd} from "react-icons/md"
import c from "../../styles/variables.module.scss"
import  {useCompanyContext} from "@/app/calculator/context/companyContext";
import { ServiceTypeF} from "@/app/calculator/types";
import {showRabatForService} from "@/app/calculator/common/common";


    export const Service = memo<ServiceTypeF>(({id,name,price}) => {
        const {setCompanyServices,services: orders} = useCompanyContext()


        const addService = (id: ServiceTypeF["id"],name: ServiceTypeF["name"],price: ServiceTypeF["price"]) => {
             if(orders.some(service => service.id === id )) return
            setCompanyServices([...orders,  {id, name,price}])
            const success = showRabatForService(id)
            console.log("success",success)
        }

           // const isRabatStyle = showAvailableDiscounts(orders,id)

            return (
            <div id="service" className={c.service}  >
                <h4 id="service_title" className={c.title}>{name}</h4>
                <p className={c.price}>{price} zł</p>
                <div className={c.buttonsWrapper}>
                    <MdAdd onClick={()=> addService(id, name,price)} className={c.addButton} size="25px"/>
                </div>
            </div>
        )
    })