import './Navbar.module.css'
import styles from './Navbar.module.css'
import React, {Component} from "react";

class BurgerMenu extends Component {

    constructor() {
        super();

        this.state = {
            width: 0
        }
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth }, () => {
            if (this.props.parentState && this.state.width > 876) {
                const burgerWrapper = document.getElementById("burgerWrapper");
                if (burgerWrapper === undefined) return;

                burgerWrapper.style.gridTemplateRows = "0fr";
                this.props.parentStateUpdate()
            }
        });
    };

    toggleBurger() {
        this.props.parentStateUpdate()
        this.setState({toggled: this.props.parentState})

        const burgerWrapper = document.getElementById("burgerWrapper");
        if (burgerWrapper === undefined) return;

        if (!this.props.parentState) {
            burgerWrapper.style.gridTemplateRows = "1fr";
        } else {
            burgerWrapper.style.gridTemplateRows = "0fr";
        }
    }

    render() {
        let burgerClass = `${styles.burgerIcons} ${styles.burgerContainer}`;
        burgerClass += this.props.parentState ? ` ${styles.open}` : "";

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
