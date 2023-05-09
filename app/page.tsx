"use client"

import styles from './page.module.css'
import {Inter} from   "@next/font/google"
import { Link } from '@chakra-ui/next-js'

const inter = Inter({
    subsets: ["latin"]
})

export default function Home() {
  return (
    <main className={styles.main}>
        <nav>
            <ul>
                <Link href="/calculator">
                    Go to Calculator
                </Link>
            </ul>
        </nav>
     <h1 >Hello Next.js</h1>
    </main>
  )
}
