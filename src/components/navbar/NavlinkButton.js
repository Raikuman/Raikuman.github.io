import styles from './Navbar.module.css'
import Abberation from "../abberation/Abberation";
import {useLocation, useNavigate} from "react-router-dom";

export const NavlinkButton = ({content, link, redirect, className}) => {

    const location = useLocation();
    const navigate = useNavigate();

    const routeChange = () =>{
        navigate('/', {state: {targetId: link}});
        document.getElementById(link).scrollIntoView({behavior: "smooth"});
    }

    function JumpToRelevantDiv() {
        if (redirect !== undefined) {
            window.open(redirect, '_blank');
            return;
        }

        if (location.pathname === '/' || location.pathname === '/' + link.substring(1, link.length)) {
            document.getElementById(link).scrollIntoView({behavior: "smooth"});
        } else {
            routeChange();
        }
     }

    return (
        <div className={`${styles.linkContainer} ${className}`}>
            <button onClick={JumpToRelevantDiv} className={`${styles.anchorContainer}`}>
                <Abberation color0="#E9EDE9" color1="#5CC8FF" color2="#F72642" className={styles.link}>
                    <h1 style={{margin: 0}}>{content}</h1>
                </Abberation>
            </button>
        </div>
    )
}