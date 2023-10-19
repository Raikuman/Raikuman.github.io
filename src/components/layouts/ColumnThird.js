import styles from "./ContainerLayout.module.css";

const ColumnThird = ({id, children, className}) => {
    return (
        <div id={id} className={`${styles.columnThird} ${className === undefined ? "" : " " + className}`}>
            {children}
        </div>
    )
}

export default ColumnThird