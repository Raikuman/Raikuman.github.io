import pageStyles from "../../css/PageDesign.module.css"
import Row from "../layouts/Row";
import {Button} from "../buttons/Button";
import { motion } from "framer-motion"
import ColumnSingle from "../layouts/ColumnSingle";
import ColumnHalf from "../layouts/ColumnHalf";
import containerLayouts from "../layouts/ContainerLayout.module.css";

export const ProjectsHome = () => {
    return (
        <Row id="#projects">
            <ColumnSingle className={`${containerLayouts.bgWhite} ${pageStyles.defaultStyles}`}>
                <ColumnHalf className={containerLayouts.bgRed}>
                    <h1 style={{textAlign: "center"}}>PROJECTS</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <Button color="red" local="/projects" text={"View projects"}/>
                </ColumnHalf>
                <ColumnHalf className={containerLayouts.bgRed}>
                    <h1 style={{textAlign: "center"}}>IMAGE</h1>
                </ColumnHalf>
            </ColumnSingle>
        </Row>
    )
}
