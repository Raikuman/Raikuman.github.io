import ColumnContainerThird from "../layouts/ColumnContainerThird";
import RowContainer from "../layouts/RowContainer";
import pageStyles from "../../css/PageDesign.module.css"
import {Button} from "../buttons/Button";

export const AboutHome = () => {
    return (
        <RowContainer id="#about" className={pageStyles.defaultStyles}>
            <ColumnContainerThird className={pageStyles.roundedColumn}>
                <h1>Title</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo
                    consequat. Duis aute <span className={pageStyles.highlight}>irure dolor in</span> reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                </p>
                <Button local="/projects"><h1>Projects</h1></Button>
                <Button color="red"><h1>Button</h1></Button>
                <Button color="blue"><h1>Button</h1></Button>
            </ColumnContainerThird>
            <ColumnContainerThird className={pageStyles.roundedColumn}>
                <h1>Title</h1>
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
            </ColumnContainerThird>
            <ColumnContainerThird className={pageStyles.roundedColumn}>
                <h1>Title</h1>
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
            </ColumnContainerThird>
        </RowContainer>
    )
}
