import styles from "./HomeLayout.module.css";
import splash from '../../resources/splash.jpg'

export const SplashCover = ({id}) => {
    return (
        <div id={id}>
            <img src={splash} alt={"Logo"} className={styles.coverImg}/>
        </div>
    )
}
