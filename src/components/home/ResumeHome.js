import Row from "../layouts/Row";
import ColumnSingle from "../layouts/ColumnSingle";
import containerLayouts from "../layouts/ContainerLayout.module.css";
import pageStyles from "../../css/PageDesign.module.css";

export const ResumeHome = () => {
    return (
        <Row id="#resume">
            <ColumnSingle className={`${containerLayouts.bgWhite} ${pageStyles.defaultStyles}`}>
                <h1 style={{textAlign: "center"}}>RESUME</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </ColumnSingle>
        </Row>
    )
}
