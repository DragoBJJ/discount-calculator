import {memo} from "react";
import {useCompanyContext} from "@/app/context/companyContext";
import {showSuggestedDiscounts} from "@/app/common/common";
import {useToast} from '@chakra-ui/react'



export const FavorableDiscounts = (()=> {
     const {suggestedDiscounts,services} = useCompanyContext()
    const toast = useToast()
    const sentences =  showSuggestedDiscounts(suggestedDiscounts)
     if(services.length > 1) return
    return (
        <div>

            {sentences.length ? sentences.forEach((sentence,index)=> {
             return (
                 toast({
                     position: "bottom-left",
                     title: "Great !",
                     variant: "left-accent",
                     description: sentence.title,
                     duration: 5000,
                     isClosable: true,
                 })
             )
            }): <></>}
        </div>
    );
})