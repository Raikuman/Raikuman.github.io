import styles from "./HomeLayout.module.css";
import selfImage from "../../resources/selfimage.png"

export const SplashCover = ({id}) => {
    return (
        <div id={id} className={styles.splashContainer}>
            <div className={styles.splashWrapper}>
                <div className={styles.splashContentContainer}>
                    <div className={styles.splashSectionLeft}>
                        <h1>Jim Inong</h1>
                        <p>
                            Full stack web developer, game creator, and rpg enjoyer from California
                        </p>
                    </div>
                    <div className={styles.splashSectionRight}>
                        <img alt="Jim's icon" src={selfImage}/>
                    </div>
                </div>
            </div>

        </div>
    )
}
