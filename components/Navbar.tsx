import { FC } from "react";
import Link from "next/link"
import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
const Navbar: FC = () => {
    return (
        <nav className={styles["menu-container"]}>
            {menuItems.map(item=>{
                return(

                    <ActiveLink key={item.href} text={item.text} href={item.href} />
                )
            })}
        </nav>
    )
}

export default Navbar
