import React, {Component} from 'react';
import {TypingEffect} from "../../utils/TypingEffect";
import styles from "./Navbar.module.css";

class LogoComp extends Component {

    constructor() {
        super();

        this.state = {
            hover: false
        }
    }

    mouseEnter() {
        this.setState({hover: true})
    }

    mouseExit() {
        this.setState({hover: false})
    }

    render() {
        const text = "j.inong";
        const logoText = TypingEffect(text, 200);
        let className = '';
        if (logoText === text) {
            className = styles.caretBlink;
        }

        return (
            <div className={styles.navbarColumn}>
                <div className={styles.logoContainer}>

                    <div className={`${styles.logoHoverContainer} ${styles.blueLogo}`}>
                        <h1 className={styles.logo}>{logoText}</h1>
                        <span className={`${styles.caret} ${className}`}>_</span>
                    </div>
                    <div className={`${styles.logoHoverContainer} ${styles.redLogo}`}>
                        <h1 className={styles.logo}>{logoText}</h1>
                        <span className={`${styles.caret} ${className}`}>_</span>
                    </div>
                    <div className={styles.logoHoverContainer} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseExit.bind(this)}>
                        <h1 className={styles.logo}>{logoText}</h1>
                        <span className={`${styles.caret} ${className}`}>_</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default LogoComp;