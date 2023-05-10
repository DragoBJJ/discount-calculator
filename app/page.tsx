"use client"

import {Inter} from   "@next/font/google"
import c from "@/app/styles/page.module.scss";
import {CompanyProvider} from "@/app/context/companyContext";
import {Calculator} from "@/app/components/organism/Calculator";

const inter = Inter({
    subsets: ["latin"]
})

export default function Home() {
  return (
      <div  className={c.calculatorPage}>
          <CompanyProvider>
              <Calculator/>
          </CompanyProvider>
      </div>
  )
}
