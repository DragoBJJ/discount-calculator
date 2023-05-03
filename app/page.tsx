import styles from './page.module.css'
import {Inter} from   "@next/font/google"

const inter = Inter({
    subsets: ["latin"]
})

export default function Home() {
  return (
    <main className={styles.main}>
        <nav>
            <ul>
                <li>
                    <a href="/calculator">Go to Calculator</a>
                </li>
            </ul>
        </nav>
     <h1 >Hello Next.js</h1>
    </main>
  )
}
