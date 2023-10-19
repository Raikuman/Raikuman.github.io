import Row from "../layouts/Row";
import ColumnSingle from "../layouts/ColumnSingle";
import containerLayouts from "../layouts/ContainerLayout.module.css";
import ColumnHalf from "../layouts/ColumnHalf";
import {Button} from "../buttons/Button";
import pageStyles from "../../css/PageDesign.module.css";

export const ContactHome = () => {
    return (
        <Row id="#contact">
            <ColumnSingle className={`${containerLayouts.bgWhite} ${pageStyles.defaultStyles}`}>
                <ColumnHalf className={containerLayouts.bgRed}>
                    <h1 style={{textAlign: "center"}}>CONTACT</h1>
                </ColumnHalf>
                <ColumnHalf className={containerLayouts.bgRed}>
                    <h1 style={{textAlign: "center"}}>FORM</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <Button color="red" local="/projects" text={"SEND FORM"}/>
                </ColumnHalf>
            </ColumnSingle>
        </Row>
    )
}
