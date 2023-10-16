import styles from './Navbar.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import BurgerMenu from "./BurgerMenu";
import {Logo} from "./Logo";
import Abberation from "../abberation/Abberation";
import {NavlinkButton} from "./NavlinkButton";

export const Navbar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <div className={styles.navbarColumn}>
                        <Abberation color0="#E9EDE9" color1="#5CC8FF" color2="#F72642" logoControl={styles.logoControl}><Logo link="#home"/></Abberation>
                    </div>
                    <div className={styles.navbarColumn}>
                        <BurgerMenu/>
                        <div className={styles.menuLinks}>
                            <NavlinkButton content={<FontAwesomeIcon icon='fa-brands fa-github'/>} redirect="https://github.com/Raikuman"/>
                            <NavlinkButton content="CONTACT" link="#contact"/>
                            <NavlinkButton content="PROJECTS" link="#projects"/>
                            <NavlinkButton content="ABOUT" link="#about"/>
                        </div>

                    </div>
                </div>
                <div id="burgerMenu" className={styles.burgerMenu}>
                    <NavlinkButton content="CONTACT" link="#contact" className={styles.burgerItem}/>
                    <NavlinkButton content="PROJECTS" link="#projects" className={styles.burgerItem}/>
                    <NavlinkButton content="ABOUT" link="#about" className={styles.burgerItem}/>
                </div>
            </div>
        </div>

    )
}
