import c from "../styles/variables.module.scss"
import {Services} from "@/app/calculator/components/Services";


            export default function About(){
            const servicesData: Service[] = [
                {
                    name: "Internet",
                    price: 39
                },
                {
                    name: "Telewizja",
                    price: 39
                },
                {
                    name: "Abonament telefoniczny",
                    price: 39
                },
                {
                    name: "Dekoder 4K",
                    price: 39
                }
            ]
            return (
                <div  className={c.calculatorPage}>
                        <Services services={servicesData} />
                </div>
            )
        }
