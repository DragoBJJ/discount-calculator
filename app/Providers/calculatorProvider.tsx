import {ServicesProvider} from "@/app/context/ServicesContext";
import {OrderLogicProvider} from "@/app/context/OrderLogicContext";
import {memo, ReactNode} from "react";


type CalculatorProviderType  = {
    children: ReactNode
}

export const CalculatorContextProvider = memo<CalculatorProviderType>(({children}) => {
    return (
        <ServicesProvider>
            <OrderLogicProvider>
                {children}
            </OrderLogicProvider>
            </ServicesProvider>
    )
})