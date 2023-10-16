import React, {Component} from 'react';
import styles from "./Abberation.module.css"

class Abberation extends Component {
    render() {
        const {color0, color1, color2, className, logoControl} = this.props;

        let originalElement = React.cloneElement(this.props.children)
        let firstElement = React.cloneElement(this.props.children);
        let secondElement = React.cloneElement(this.props.children);

        return (
            <div className={`${styles.abberationControl} ${logoControl}`}>
                <div className={styles.abberationCenter}>
                    <div className={styles.abberationContainer}>
                        <div className={`${styles.abberationElement}  ${className}`}
                             style={{color: color0}}>{originalElement}</div>
                        <div className={`${styles.abberationElement} ${styles.abberation1} ${className}`}
                             style={{color: color1}}>{firstElement}</div>
                        <div className={`${styles.abberationElement} ${styles.abberation2} ${className}`}
                             style={{color: color2}}>{secondElement}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Abberation;