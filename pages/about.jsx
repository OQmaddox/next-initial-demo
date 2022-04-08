import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function about() {
    return (
        <div className={styles.container}>

            <Navbar />
            <h1>Page About</h1>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {/* Ir a <a href="/">Home</a> */}
            Ir a <Link href="/">Home</Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

            </main>

        </div>
    )
}