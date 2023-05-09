"use client";

import c from "../styles/variables.module.scss"
import {Services} from "@/app/calculator/components/Services";
import {OrderList} from "@/app/calculator/components/OrderList";
import {CompanyProvider, useCompanyContext} from "@/app/calculator/context/companyContext";
import {SummaryOrder} from "@/app/calculator/components/SummaryOrder";
import {getServicesDataByYear} from "@/app/calculator/common/common";
import {SelectList} from "@/app/calculator/components/SelectList";

export default function Calculator(){
    const serviceData2023 = getServicesDataByYear("2023")
            return (

                <div  className={c.calculatorPage}>
                    <CompanyProvider>
                        <Services services={serviceData2023} />
                      <div className={c.summarySection}>
                           <SelectList/>
                          <OrderList/>
                          <SummaryOrder/>
                      </div>
                    </CompanyProvider>
                </div>

            )
        }
