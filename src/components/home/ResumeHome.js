import Row from "../layouts/Row";
import ColumnSingle from "../layouts/ColumnSingle";
import containerLayouts from "../layouts/ContainerLayout.module.css";
import pageStyles from "../../css/PageDesign.module.css";
import ColumnHalf from "../layouts/ColumnHalf";
import {Button} from "../buttons/Button";
import image from '../../resources/resumescreenshot.png'

export const ResumeHome = () => {
    return (
        <Row id="#resume">
            <ColumnSingle className={`${containerLayouts.bgWhite} ${pageStyles.defaultStyles} ${pageStyles.roundedColumn}`}>
                <ColumnHalf>
                    <h1 style={{textAlign: "center"}}>RESUME</h1>
                    <p style={{textAlign: "center"}}>
                        Take a look at my resume here:
                    </p>
                    <Button color="red" download={process.env.PUBLIC_URL + '/resources/JimInongResume.pdf'} text={"Download resume"}/>
                </ColumnHalf>
                <ColumnHalf>
                    <div className={pageStyles.columnImage}>
                        <img src={image} alt={"Resume"}/>
                    </div>
                </ColumnHalf>
            </ColumnSingle>
        </Row>
    )
}
