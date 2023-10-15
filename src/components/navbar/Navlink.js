import React, {Component} from 'react';
import styles from './Navbar.module.css'

class Navlink extends Component {

    JumpToReleventDiv() {
        const releventDiv = document.getElementById(this.props.link);
        // behavior: "smooth" parameter for smooth movement
        releventDiv.scrollIntoView({behavior: "smooth"});
    }

    render() {
        const {content} = this.props;
        return (
            <>
                <a onClick={this.JumpToReleventDiv.bind(this)} className={styles.link}><div className={styles.linkText}>{content}</div></a>
            </>
        );
    }
}

export default Navlink;
