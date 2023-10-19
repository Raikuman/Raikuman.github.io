import styles from "./ContainerLayout.module.css";

const ColumnHalf = ({id, children, className}) => {
    return (
        <div id={id} className={`${styles.columnHalf} ${className === undefined ? "" : " " + className}`}>
            {children}
        </div>
    )
}

export default ColumnHalf