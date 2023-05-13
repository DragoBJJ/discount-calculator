"use client"

import {Inter} from   "@next/font/google"
import c from "@/app/styles/page.module.scss";
import {OrderLogicProvider} from "@/app/context/OrderLogicContext";
import {Calculator} from "@/app/components/organism/Calculator";

const inter = Inter({
    subsets: ["latin"]
})

export default function Home() {
  return (
      <div  className={c.calculatorPage}>
          <OrderLogicProvider>
              <Calculator/>
          </OrderLogicProvider>
      </div>
  )
}
