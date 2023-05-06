import c from "../styles/variables.module.scss"
import {Services} from "@/app/calculator/components/Services";
import {OrderList} from "@/app/calculator/components/OrderList";
import {CompanyProvider} from "@/app/calculator/context/companyContext";
import {SummaryOrder} from "@/app/calculator/components/SummaryOrder";
import {companyData}  from "./data"


export default function About(){
    const servicesData = companyData.flatMap(({serviceData})=>serviceData)
    const serviceData2023 = servicesData.map((data)=> {
        return {
            ...data,
            price: data.price["2023"]
        }
    })
            return (
                <div  className={c.calculatorPage}>
                    <CompanyProvider>
                        <Services services={serviceData2023 } />
                      <div className={c.summarySection}>
                          <OrderList/>
                          <SummaryOrder/>
                      </div>
                    </CompanyProvider>
                </div>
            )
        }
