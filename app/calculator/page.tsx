import c from "../styles/variables.module.scss"
import {Services} from "@/app/calculator/components/Services";
import {OrderList} from "@/app/calculator/components/OrderList";
import {companyData}  from "./data"
import {CompanyProvider} from "@/app/calculator/context/companyContext";

export default function About(){

    const servicesData = companyData.flatMap(({serviceData})=>serviceData)

            return (
                <div  className={c.calculatorPage}>
                    <CompanyProvider>
                        <Services services={servicesData} />
                        <OrderList/>
                    </CompanyProvider>
                </div>
            )
        }
