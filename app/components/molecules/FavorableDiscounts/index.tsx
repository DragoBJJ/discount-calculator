
import {useOrderLogicContext} from "@/app/hooks";
import {showSuggestedDiscounts} from "@/app/utils/discountsLogic";
import s from "./style.module.scss"
import {Header} from "@/app/components/atoms/Header";

export const FavorableDiscounts = (()=> {
     const {services, suggestedDiscounts} = useOrderLogicContext()

    const sentences =  showSuggestedDiscounts(suggestedDiscounts)

    return (
        <div className={s.favorableWrapper}>
            {services.length < 2 && sentences && sentences.map((sentence,index)=> {
             return (
                 <div key={index} className={s.sentenceWrapper}>
                     <Header className={s.title} size="14px" title={sentence.title}  />
                 </div>
             )
            })}
        </div>
    );
})