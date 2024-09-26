import { Link, NavLink } from "react-router-dom"
import Icon from "./Icon"
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.nav}>
                <NavLink to='/home' className={styles.navLink}>
                    <Icon imgsrc='https://img.icons8.com/?size=100&id=14096&format=png&color=000000' 
                    alt='home-icon' />
                </NavLink>

                <NavLink to='/friends'className={styles.navLink}>
                    <Icon imgsrc='https://img.icons8.com/?size=100&id=69&format=png&color=1A1A1A'
                    alt='friends-icon' />
                </NavLink>

                <NavLink to='/requests'className={styles.navLink}>
                    <Icon imgsrc='https://img.icons8.com/?size=100&id=11642&format=png&color=000000'
                    alt='requests-icon' />
                </NavLink>
        </nav>
    )
}

export default NavBar
