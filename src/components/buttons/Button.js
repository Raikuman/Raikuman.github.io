import styles from './ButtonStyle.module.css'
import {useNavigate} from "react-router-dom";

export const Button = ({color, className, id, children, local, link}) => {
    var colorStyle;
    switch (color) {
        case "white":
        default:
        case undefined:
            colorStyle = styles.whiteButton;
            break;

        case "red":
            colorStyle = styles.redButton
            break;

        case "blue":
            colorStyle = styles.blueButton
            break;
    }

    let navigate = useNavigate();
    function redirect() {
        if (local !== undefined) {
            navigate(`${local}`)
            return;
        }

        if (link !== undefined) {
            window.open(redirect, '_blank');
        }
    }

    return (
        <div className={styles.buttonWrapper}>
            <button id={id} onClick={redirect} className={`${styles.defaultButtonStyle} ${colorStyle} ${className === undefined ? '' : className}`}>
                {children}
            </button>
        </div>
    )
}
