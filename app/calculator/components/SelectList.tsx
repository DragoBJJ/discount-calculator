import { Select } from '@chakra-ui/react'
import style from "../../styles/variables.module.scss"
import {useCompanyContext} from "@/app/calculator/context/companyContext";
import {selectListData} from "../database/calculator_database"
import {PriceYear} from "@/app/calculator/types";

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