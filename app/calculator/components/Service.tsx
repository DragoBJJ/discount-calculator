import {memo} from "react";
import c from "../../styles/variables.module.scss"


export const Service = memo<Service>(({name,price
}) => {
    return (
        <div className={c.service}>
            <h4 className={c.title}>{name}</h4>
            <p>{price}</p>
        </div>
    )
})