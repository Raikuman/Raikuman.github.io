import {TabTitle} from "../utils/TabTitle";
import RowContainer from "./layouts/RowContainer";
import styles from "./home/HomeLayout.module.css";
import ColumnSingle from "./layouts/ColumnContainerSingle";

export const Projects = () => {
    TabTitle("Jim Inong - Projects");

    return (
        <>
            <RowContainer className={styles.about}>
                <ColumnSingle>
                    <h1 id="#projects">Title</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                </ColumnSingle>
            </RowContainer>
        </>
    )
}
