import Link from 'next/link'
import { FC } from 'react'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

const MainLayout:FC = ({children}) => {
    return (
        <div className={styles.container}>
          
        <Navbar/>
        <h1>Page Home</h1>
          <main className={styles.main}>
            {children}
    
          </main>
    
        </div>
      )
}

export default MainLayout