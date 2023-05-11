"use client";

import c from "./style.module.scss"
import {Services} from "@/app/components/molecules/Services";
import {OrderList} from "@/app/components/molecules/OrderList";
import {CompanyProvider} from "@/app/context/companyContext";
import {SummaryOrder} from "@/app/components/molecules/Summary";

import {SelectList} from "@/app/components/atoms/SelectList";
import {FavorableDiscounts} from "@/app/components/molecules/FavorableDiscounts";
import {getServicesDataByYear} from "@/app/utils/services";

export  const Calculator =()=> {
    const serviceData2023 = getServicesDataByYear("2023")
    return (
            <CompanyProvider>
                <div className={c.calculatorWrapper}>
                    <div className={c.wrapper}>
                        <SelectList/>
                        <Services services={serviceData2023} />
                        <FavorableDiscounts />
                    </div>
                    <div className={c.summarySection}>
                        <OrderList/>
                        <SummaryOrder/>
                    </div>
                </div>
            </CompanyProvider>

    )
}
