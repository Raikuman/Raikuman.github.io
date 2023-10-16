import styles from "./Navbar.module.css";
import {TypingEffect} from "../../utils/TypingEffect";
import {useLocation, useNavigate} from "react-router-dom";

export const Logo = ({link}) => {
    const text = "j.inong";
    const logoText = TypingEffect(text, 200);
    let className = '';
    if (logoText === text) {
        className = styles.caretBlink;
    }

    const location = useLocation();
    const navigate = useNavigate();

    function JumpToRelevantDiv() {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            document.getElementById(link).scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <div onClick={JumpToRelevantDiv} style={{cursor: "pointer"}}>
            <h1 className={styles.logo}>{logoText}</h1>
            <span className={`${styles.caret} ${className}`}>_</span>
        </div>
    )
}
