import {memo} from "react";
import {useCompanyContext} from "@/app/hooks";
import {useToast} from '@chakra-ui/react'
import {showSuggestedDiscounts} from "@/app/utils/discountsLogic";



export const FavorableDiscounts = (()=> {
     const {suggestedDiscounts,services} = useCompanyContext()
    const toast = useToast()
    const sentences =  showSuggestedDiscounts(suggestedDiscounts)
     if(services.length > 1) return
    return (
        <div>

            {/*{sentences.length && sentences.forEach((sentence,index)=> {*/}
            {/*  <div>*/}
            {/*      toast({*/}

            {/*      position: "bottom-left",*/}
            {/*      title: "Great !",*/}
            {/*      variant: "left-accent",*/}
            {/*      description: sentence.title,*/}
            {/*      duration: 5000,*/}
            {/*      isClosable: true,*/}
            {/*  })*/}
            {/*  </div>*/}
            {/*})}*/}
        </div>
    );
})