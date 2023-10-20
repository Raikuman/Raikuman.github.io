import styles from "./Forms.module.css"
import buttonStyles from "../buttons/ButtonStyle.module.css"
import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser'

class ContactForm extends Component {

    constructor() {
        super();

        this.state = {
            nameText: "",
            emailText: "",
            messageText: "",
            validEmail: true,
            validName: true,
            validMessage: true,
            showPopup: false,
            valid: false,
            formRef: React.createRef()
        }

        this.GetPopup = this.GetPopup.bind(this);
    }

    HandleInputName(event) {
        this.setState({nameText: event.target.value}, () => {
            if (this.state.nameText !== '') this.setState({validName: true})
        });
    }

    HandleInputEmail(event) {
        this.setState({emailText: event.target.value}, () => {
            if (this.state.emailText !== '') this.setState({validEmail: true})
        });
    }

    HandleInputMessage(event) {
        this.setState({messageText: event.target.value}, () => {
            if (this.state.messageText !== '') this.setState({validMessage: true})
        });
    }

    ValidateName = () => {
        if (this.state.nameText === '') {
            this.setState({validName: false});
        } else {
            this.setState({validName: true});
        }
    }

    ValidateEmail = () => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (this.state.emailText.match(validRegex)) {
            this.setState({validEmail: true});
        } else {
            this.setState({validEmail: false});
        }
    }

    ValidateMessage = () => {
        if (this.state.messageText === '') {
            this.setState({validMessage: false});
        } else {
            this.setState({validMessage: true});
        }
    }

    SubmitEmail = (e) => {
        e.preventDefault();
        if (!this.state.validName || !this.state.validEmail || !this.state.validMessage ||
            this.state.nameText === '' || this.state.emailText === '' || this.state.messageText === '') {
            this.setState({valid: false});
        } else {
            emailjs.sendForm(
                'service_bk4j9r8',
                'template_58iyj8r',
                this.state.formRef.current,
                '2aLIOk5Irl2alCCL_')
                .then((result) => {
                    this.setState({valid: true});
                }, (error) => {
                    this.setState({valid: false});
                });
        }

        this.setState({showPopup: true})
        this.setState({nameText: "", emailText: "", messageText: "", validName: true, validEmail: true, validMessage: true})

        const timer =  setTimeout(() => {
            this.setState({showPopup: false});
        }, 3000)
        return () => clearTimeout(timer);

    }

    GetPopup = () => {
        if (this.state.valid) {
            return (
                <label className={`${styles.popup} ${styles.popupSuccess} ${this.state.showPopup ? `${styles.showPopup}` : ''}`}>You have sent a message!</label>
            );
        } else {
            return (
                <label className={`${styles.popup} ${styles.popupFail} ${this.state.showPopup ? `${styles.showPopup}` : ''}`}>There was an error sending a message!</label>
            );
        }
    }

    render() {
        const validName = !this.state.validName ? `${styles.incorrectForm}` : '';
        const validEmail = !this.state.validEmail ? `${styles.incorrectForm}` : '';
        const validMessage = !this.state.validMessage ? `${styles.incorrectForm}` : '';
        const popupLabel = this.GetPopup();

        return (
            <form ref={this.state.formRef} style={{position: "relative"}}>
                <div className={styles.forms}>
                    <h1>NAME</h1>
                    <input type="text" id="name" name="name"  onBlur={this.ValidateName.bind(this)} value={this.state.nameText} onChange={this.HandleInputName.bind(this)}  className={validName}/>
                    <label style={this.state.validName ? {display: "none"} : {display: "inline"}}>Name cannot be empty</label>
                </div>
                <div className={styles.forms}>
                    <h1>EMAIL</h1>
                    <input type="text" id="sent_email" name="sent_email" onBlur={this.ValidateEmail.bind(this)} value={this.state.emailText} onChange={this.HandleInputEmail.bind(this)} className={validEmail}/>
                    <label style={this.state.validEmail ? {display: "none"} : {display: "inline"}}>Email cannot be empty</label>
                </div>
                <div className={styles.forms}>
                    <h1>MESSAGE</h1>
                    <textarea id="message" name="message" onBlur={this.ValidateMessage.bind(this)} value={this.state.messageText} onChange={this.HandleInputMessage.bind(this)} className={validMessage}/>
                    <label style={this.state.validMessage ? {display: "none"} : {display: "inline"}}>Message cannot be empty</label>
                </div>
                <div className={buttonStyles.buttonWrapper}>
                    <button className={`${buttonStyles.defaultButtonStyle} ${buttonStyles.blueButton}`} onClick={this.SubmitEmail.bind(this)}>
                        <h1>Send message <FontAwesomeIcon icon="fa-solid fa-envelope" /></h1>
                    </button>
                </div>
                {popupLabel}
            </form>
        );
    }
}

export default ContactForm