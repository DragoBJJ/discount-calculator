"use client";
import c from "./style.module.scss"
import {Services} from "@/app/components/molecules/Services";
import {OrderList} from "@/app/components/molecules/OrderList";
import {OrderLogicProvider} from "@/app/context/OrderLogicContext";
import {SummaryOrder} from "@/app/components/molecules/Summary";

import {SelectList} from "@/app/components/atoms/SelectList";
import {FavorableDiscounts} from "@/app/components/molecules/FavorableDiscounts";
import {InitialModal} from "@/app/components/molecules/Modal";
import {ServicesProvider} from "@/app/context/ServicesContext";

export  const Calculator =() => {

    return (
        <ServicesProvider>
            <OrderLogicProvider>
                <div className={c.calculatorWrapper}>
                    <div className={c.servicesSection}>
                       <div className={c.wrapper}>
                           <SelectList/>
                           <InitialModal/>
                       </div>
                        <Services />
                        <FavorableDiscounts />
                    </div>
                    <div className={c.summarySection}>
                        <OrderList/>
                        <SummaryOrder/>
                    </div>
                </div>
            </OrderLogicProvider>
        </ServicesProvider>

    )
}
