import styles from './Navbar.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import BurgerMenu from "./BurgerMenu";
import {Logo} from "./Logo";
import Abberation from "../abberation/Abberation";
import {NavlinkButton} from "./NavlinkButton";
import {Component} from "react";

class Navbar extends Component {

    constructor() {
        super();

        this.state = {
            toggled: false
        }
    }

    toggleState = () => {
        this.setState({toggled: !this.state.toggled});
    }

    render() {
        return (
            <div>
                <div className={styles.navbar}>
                    <div className={styles.navbarContainer}>
                        <div className={styles.navbarColumn}>
                            <Abberation color0="#E9EDE9" color1="#5CC8FF" color2="#F72642"
                                        logoControl={styles.logoControl}><Logo
                                link="#home"/></Abberation>
                        </div>
                        <div className={styles.navbarColumn}>
                            <BurgerMenu parentStateUpdate={this.toggleState} parentState={this.state.toggled}/>
                            <div className={styles.menuLinks}>
                                <NavlinkButton content={<FontAwesomeIcon icon='fa-brands fa-github'/>}
                                               redirect="https://github.com/Raikuman"/>
                                <NavlinkButton content="CONTACT" link="#contact"/>
                                <NavlinkButton content="RESUME" link="#resume"/>
                                <NavlinkButton content="PROJECTS" link="#projects"/>
                                <NavlinkButton content="ABOUT" link="#about"/>
                            </div>

                        </div>
                    </div>
                    <div id="burgerWrapper" className={styles.burgerWrapper}>
                        <div className={styles.burgerMenu}>
                            <NavlinkButton content="ABOUT" link="#about" className={styles.burgerItem} parentStateUpdate={this.toggleState}/>
                            <NavlinkButton content="PROJECTS" link="#projects" className={styles.burgerItem} parentStateUpdate={this.toggleState}/>
                            <NavlinkButton content="RESUME" link="#resume" className={styles.burgerItem} parentStateUpdate={this.toggleState}/>
                            <NavlinkButton content="CONTACT" link="#contact" className={styles.burgerItem} parentStateUpdate={this.toggleState}/>
                        </div>
                    </div>
                </div>
                <div className={styles.navbarFill}></div>
            </div>
        )
    }
}

export default Navbar;
