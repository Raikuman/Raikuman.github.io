import pageStyles from "../../css/PageDesign.module.css"
import ColumnSingle from "../layouts/ColumnContainerSingle";
import RowContainer from "../layouts/RowContainer";

export const ResumeHome = () => {
    return (
        <RowContainer id="#resume" className={pageStyles.defaultStyles}>
            <ColumnSingle className={pageStyles.roundedColumn}>
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
        </RowContainer>
    )
}
