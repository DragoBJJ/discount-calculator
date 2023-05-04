import {memo} from "react";
import c from "../../styles/variables.module.scss"


    export const Service = memo<Service>(({name,price
    }) => {
        return (
            <div id="service" className={c.service}>
                <h4 id="service_title" className={c.title}>{name}</h4>
                <p className={c.price}>{price} zł</p>
            </div>
        )
    })