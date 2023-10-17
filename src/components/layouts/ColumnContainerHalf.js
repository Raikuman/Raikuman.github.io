import React, {Component} from 'react';
import styles from './Layouts.module.css'

class ColumnContainerHalf extends Component {
    render() {
        const {className, id} = this.props;

        return (
            <div id={id} className={`${styles.columnHalves} ${className === undefined ? "" : " " + className}`}>
                {this.props.children}
            </div>
        );
    }
}

export default ColumnContainerHalf;