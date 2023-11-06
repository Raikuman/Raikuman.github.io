import pageStyles from "../../css/PageDesign.module.css"
import containerStyles from "../layouts/ContainerLayout.module.css"
import Row from "../layouts/Row";
import {Button} from "../buttons/Button";
import ColumnSingle from "../layouts/ColumnSingle";
import ColumnHalf from "../layouts/ColumnHalf";
import {ProjectSlider} from "./components/projectSlide/ProjectSlider";

export const ProjectsHome = () => {
    return (
        <Row id="#projects">
            <ColumnSingle className={`${pageStyles.defaultStyles} ${pageStyles.roundedColumn} ${containerStyles.bgLightRaisin}`}>
                <h1 style={{textAlign: "center"}} className={pageStyles.headerRed}>PROJECTS</h1>
                <ColumnHalf>
                    <ProjectSlider/>
                </ColumnHalf>
                <ColumnHalf>
                    <p>
                        A collection of projects I've developed: Web design & development, games, bots, etc.
                    </p>
                    <Button color="blue" local="/projects" text={"View projects"}/>
                </ColumnHalf>
            </ColumnSingle>
        </Row>
    )
}
