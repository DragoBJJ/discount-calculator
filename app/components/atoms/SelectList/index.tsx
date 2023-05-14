import { Select } from '@chakra-ui/react'
import style from "./style.module.scss"
import {useOrderLogicContext, useServicesContext} from "@/app/hooks";
import {PriceYear} from "@/app/types";


export const SelectList = ()=> {
    const {setSelectedYearData, services} = useOrderLogicContext()
    const {listOfYears} = useServicesContext()

    return (
        <Select  isDisabled={!!services.length}  onChange={(event )=> setSelectedYearData(event.currentTarget.value as PriceYear) }   size="md" maxWidth="150px" margin="0 0.5rem 1rem 0"  className={style.selectList}>
            {listOfYears && listOfYears.map((year,index)=> {
                return (
                    <option onClick={(event)=> setSelectedYearData(event.currentTarget.value as PriceYear)}  key={year + index} value={year}>{year}</option>
                )
            })}

        </Select>
    )
}