import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
    <Navbar />
    <h1>Page Home</h1>
      <main className={styles.main}>
        <h1 className={styles.title}>
  {/*Ir a <a href="/about">About</a>*/}
  Ir a <Link href="/about">About</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

      </main>

    </div>
  )
}
