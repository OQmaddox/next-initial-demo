import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import MainLayout from '../components/layouts/MainLayout'
import Navbar from '../components/Navbar'

export default function about() {
    return (
       <>
           <h1 className="title">
                    {/* Ir a <a href="/">Home</a> */}
            Ir a <Link href="/">Home</Link>
                </h1>

                <p className="description">
                    Get started by editing{' '}
                    <code className="code">pages/index.js</code>
                </p>
       </>
    )
}

about.getLayout=function getLayout(page:JSX.Element){
return(
    <MainLayout>
           <DarkLayout>
            {page}
           </DarkLayout>
    </MainLayout>
    )
}