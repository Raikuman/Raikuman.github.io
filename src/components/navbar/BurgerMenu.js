import './Navbar.module.css'
import styles from './Navbar.module.css'
import React, {Component} from "react";

class BurgerMenu extends Component {

    constructor() {
        super();

        this.state = {
            toggled: false,
            width: 0
        }
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth }, () => {
            if (this.state.toggled && this.state.width > 766) {
                const burgerMenu = document.getElementById("burgerMenu");
                if (burgerMenu === undefined) return;

                burgerMenu.style.display = "none";
                this.setState({toggled: false});
            }
        });
    };

    toggleBurger() {
        this.setState({toggled: !this.state.toggled})

        const burgerMenu = document.getElementById("burgerMenu");
        if (burgerMenu === undefined) return;

        if (!this.state.toggled) {
            burgerMenu.style.display = "flex";
        } else {
            burgerMenu.style.display = "none";
        }
    }

    render() {
        var burgerClass = `${styles.burgerIcons} ${styles.burgerContainer}`;
        burgerClass += this.state.toggled ? ` ${styles.open}` : "";

        return (

            <div className={styles.burgerContainer}>
                <div className={styles.burgerCenter}>
                    <div className={burgerClass} onClick={this.toggleBurger.bind(this)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
}

export default BurgerMenu;
