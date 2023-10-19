import Row from "../layouts/Row";
import pageStyles from "../../css/PageDesign.module.css"
import ColumnSingle from "../layouts/ColumnSingle";
import containerLayouts from "../layouts/ContainerLayout.module.css";

export const AboutHome = () => {
    return (
        <Row id="#about">
            <ColumnSingle className={`${containerLayouts.bgWhite} ${pageStyles.defaultStyles}`}>
                <h1 style={{textAlign: "center"}}>ABOUT ME</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </ColumnSingle>
        </Row>
    )
}
