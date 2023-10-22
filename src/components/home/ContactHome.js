import Row from "../layouts/Row";
import ColumnSingle from "../layouts/ColumnSingle";
import ColumnHalf from "../layouts/ColumnHalf";
import pageStyles from "../../css/PageDesign.module.css";
import formStyles from "./components/form/Forms.module.css"
import ContactForm from "./components/form/ContactForm";

export const ContactHome = () => {
    return (
        <Row id="#contact">
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
