import {TabTitle} from "../../utils/TabTitle";
import Row from "../layouts/Row";
import pageStyles from "../../css/PageDesign.module.css"
import ColumnSingle from "../layouts/ColumnSingle";
import containerLayouts from "../layouts/ContainerLayout.module.css";

export const ProjectsPage = () => {
    TabTitle("Jim Inong - Projects");

    return (
        <Row id="#projects">
            <ColumnSingle className={`${containerLayouts.bgWhite} ${pageStyles.defaultStyles}`}>
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
            </ColumnSingle>
        </Row>
    )
}
