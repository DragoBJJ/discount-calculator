import { Select } from '@chakra-ui/react'
import style from "./style.module.scss"
import {useCompanyContext} from "@/app/hooks";
import {PriceYear} from "@/app/types";

import {selectListData} from "@/app/database/calculator_database"

export const SelectList = ()=> {
    const {setSelectedYearData} = useCompanyContext()
    return (
        <Select onChange={(event )=> setSelectedYearData(event.currentTarget.value as PriceYear)}   size="md" maxWidth="150px" marginBottom="1rem"  className={style.selectList}>
            {selectListData && selectListData.map((year,index)=> {
                return (
                    <option onClick={(event)=> setSelectedYearData(event.currentTarget.value as PriceYear)}  key={year + index} value={year}>{year}</option>
                )
            })}

        </Select>
    )
}