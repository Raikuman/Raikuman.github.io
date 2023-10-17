import React, {Component} from 'react';
import styles from './Layouts.module.css'

class ColumnContainerThird extends Component {
    render() {
        const {className, id} = this.props;
        return (
            <div id={id} className={`${styles.columnSingle} ${className === undefined ? "" : " " + className}`}>
                {this.props.children}
            </div>
        );
    }
}

export default ColumnContainerThird;