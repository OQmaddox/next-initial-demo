import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

const style={
    color:'#0070f3',
    TextDecoder:'underline',
    asda:'juna'
}
interface Props{
    text:String;
    href:String;
}
const ActiveLink:FC <Props>= ({ text , href }) => {
    const {asPath}= useRouter()
    /**
     * El evento router permite obtener la informacion
     * de la ruta, para ello se usa destructuracion 
     * para acceder a la ruta y comparar
     */
    return (
        <Link href={href}>
            <a style={asPath===href ? style : undefined}>{text}</a>
        </Link>
    )
}

export default ActiveLink
