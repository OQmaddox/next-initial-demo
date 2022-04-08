import Link from "next/link"
import { useRouter } from "next/router"

const style={
    color:'#0070f3',
    TextDecoder:'underline'
}
const ActiveLink = ({ text = 'none', href = '/none' }) => {
    const {asPath}= useRouter()
    /**
     * El evento router permite obtener la informacion
     * de la ruta, para ello se usa destructuracion 
     * para acceder a la ruta y comparar
     */
    return (
        <Link href={href}>
            <a style={asPath===href ? style : null}>{text}</a>
        </Link>
    )
}

export default ActiveLink
