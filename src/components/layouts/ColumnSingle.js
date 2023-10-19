import styles from "./ContainerLayout.module.css";

const ColumnSingle = ({id, children, className}) => {
    return (
        <div id={id} className={`${styles.columnSingle} ${className === undefined ? "" : " " + className}`}>
            {children}
        </div>
    )
}

export default ColumnSingle