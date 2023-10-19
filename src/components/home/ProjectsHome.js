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
        // <Row id="#projects" className={pageStyles.defaultStyles}>
        //     <motion.div transition={{ease: "easeInOut", duration: 0.5}} initial={{width: "100%", position: "relative", top: "0.5em", opacity: 0}} whileInView={{top: 0, opacity: 1}}>
        //         <h1 className={pageStyles.rowHeader}>Row Header</h1>
        //     <ColumnSingle className={`${pageStyles.roundedColumn} ${pageStyles.whiteColumn}`}>
        //         <ColumnHalf disableSpacing={false}>
        //             <h1 style={{textAlign: "center"}}>Image</h1>
        //         </ColumnHalf>
        //         <ColumnHalf disableSpacing={false}>
        //             <h1 style={{textAlign: "center"}}>Projects</h1>
        //             <p style={{textAlign: "center"}}>
        //                 View all of my projects below.
        //             </p>
        //             <Button color="red" local="/projects" text={"View projects"}/>
        //             <Button color="white" local="/projects" text={"View projects"}/>
        //             <Button color="blue" local="/projects" text={"View projects"}/>
        //         </ColumnHalf>
        //     </ColumnSingle>
        //     </motion.div>
        // </Row>
    )
}
