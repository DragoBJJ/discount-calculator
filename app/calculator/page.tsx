"use client";

import c from "../styles/variables.module.scss"
import {Services} from "@/app/calculator/components/Services";
import {OrderList} from "@/app/calculator/components/OrderList";
import {CompanyProvider} from "@/app/calculator/context/companyContext";
import {SummaryOrder} from "@/app/calculator/components/SummaryOrder";
import {getServicesDataByYear} from "@/app/calculator/common/common";
import {SelectList} from "@/app/calculator/components/SelectList";
import {FavorableDiscounts} from "@/app/components/molecules/FavorableDiscounts";

export default function Calculator(){
    const serviceData2023 = getServicesDataByYear("2023")
            return (

                <div  className={c.calculatorPage}>
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
                </div>

            )
        }
