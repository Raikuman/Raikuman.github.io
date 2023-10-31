import ColumnSingle from "../layouts/ColumnSingle";
import pageStyles from "../../css/PageDesign.module.css";
import ColumnHalf from "../layouts/ColumnHalf";
import formStyles from "./components/form/Forms.module.css";
import ContactForm from "./components/form/ContactForm";
import Row from "../layouts/Row";

export const AboutHome = () => {
    return (
        <Row id="#about">
            <ColumnSingle className={`${pageStyles.defaultStyles} ${pageStyles.roundedColumn}`}>
                <ColumnHalf>
                    <h1 style={{textAlign: "center"}} className={pageStyles.headerRed}>CONTACT</h1>
                    <p style={{textAlign: "center"}}>Got something to ask? Leave a message!</p>
                    <a className={formStyles.emailLink} href = "mailto: jinongr98@gmail.com">jinongr98@gmail.com</a>
                </ColumnHalf>
                <ColumnHalf>
                    <ContactForm/>
                </ColumnHalf>
            </ColumnSingle>
        </Row>
    )
}
