import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navlink from "./Navlink";


export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarColumn}>
                    <h1 className={styles.logo}>RAIKU</h1>
                </div>
                <div className={styles.navbarColumn}>
                    <Navlink content="CONTACT" link="#contact"/>
                    <Navlink content="PROJECTS" link="#projects"/>
                    <Navlink content="ABOUT" link="#about"/>
                    {/*<FontAwesomeIcon icon='fa-brands fa-github' />*/}
                </div>
            </div>
        </div>
    )
}
