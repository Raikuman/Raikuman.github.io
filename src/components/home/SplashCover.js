import styles from "./HomeLayout.module.css";
import splash from '../../images/splash.jpg'

export const SplashCover = ({id}) => {
    return (
        <div id={id} className={styles.coverImg}>
            <img src={splash} alt={"Logo"} className={styles.coverImg}/>
        </div>
    )
}
