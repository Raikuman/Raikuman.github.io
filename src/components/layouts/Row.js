import styles from './ContainerLayout.module.css'

const Row = ({id, children, className}) => {
    return (
        <div id={id} className={`${styles.row} ${className === undefined ? "" : " " + className}`}>
            {children}
        </div>
    )
}

export default Row