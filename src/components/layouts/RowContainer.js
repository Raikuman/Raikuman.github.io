import React, {Component} from 'react';
import styles from './Layouts.module.css'

class RowContainer extends Component {
    render() {
        const {className, id} = this.props;

        return (
            <div id={id} className={`${styles.rowContainer} ${className === undefined ? "" : " " + className}`}>
                {this.props.children}
            </div>
        );
    }
}

export default RowContainer;