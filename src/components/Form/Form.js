import React, { Component } from "react";
import styles from "./Form.module.css";
import { If, Else } from 'rc-if-else';
import Success from './Success.js'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userEmail: "",
      message: "",
      userTelefonNummber: "",
      sended: false,
      notification: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    //console.log(e.target.name+"   "+ e.target.value)
  };

  createFormDataObj = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

   onSubmit = (event) => {
    event.preventDefault();

    const data = {
      "form-name": "contact",
      firstName: this.state.firstName,
      message: this.state.message,
      userEmail: this.state.userEmail,
      userTelefonNummber: this.state.userTelefonNummber
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(this.createFormDataObj(data)).toString(),
    })
      .then(() => {
        console.log(data)
        this.setState({
          notification: "Daten wurden abgeschickt",
          sended: true,
        });
        console.log(this.state.notification);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          notification: "Fehler... " + error,
          sended: true,
        });
        console.log(this.state.notification);
      });
  }; 
  getName = () => {
    let formName = "";
    switch (this.props.language) {
      case "de":
        formName = "Name";
        break;
      case "en":
        formName = "Name";
        break;
      default:
        formName = "Le nom";
    }
    return formName;
  };
  getTelefon = () => {
    let contactTitle = "";
    switch (this.props.language) {
      case "de":
        contactTitle = "Telefon";
        break;
      case "en":
        contactTitle = "Telephone";
        break;
      default:
        contactTitle = "Le téléphone";
    }
    return contactTitle;
  };
  getMessage = () => {
    let contactTitle = "";
    switch (this.props.language) {
      case "de":
        contactTitle = "Nachricht";
        break;
      case "en":
        contactTitle = "Message";
        break;
      default:
        contactTitle = "Le message";
    }
    return contactTitle;
  };
  getSubmit = () => {
    let contactTitle = "";
    switch (this.props.language) {
      case "de":
        contactTitle = "Senden";
        break;
      case "en":
        contactTitle = "Submit";
        break;
      default:
        contactTitle = "Envoyer";
    }
    return contactTitle;
  };
  render() {
    return (
      <If condition={!this.state.sended} >
      <div id="contact" className={styles.container}>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit={this.onSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className={styles.inputField}>
            <div className={styles.inputNamePhoneContainer}>
              <div className={styles.nameInput}>
              <input
                  name="firstName"
                  value={this.state.firstName}
                  onChange={(e) => this.changeHandler(e)}
                  placeholder={this.getName()}
                ></input>
              </div>
              <div className={styles.phoneInput}>
              <input
                  name="userTelefonNummber"
                  value={this.state.userTelefonNummber}
                  onChange={(e) => this.changeHandler(e)}
                  placeholder={this.getTelefon()}
                ></input>
              </div>
            </div>
          </div>
          <div className={styles.inputFieldMail}>
          <input
                  name="userEmail"
                  placeholder="E-Mail"
                  value={this.state.userEmail}
                  onChange={(e) => this.changeHandler(e)
                  }
                ></input>
           
          </div>
          <div className={styles.inputField}>
          <textarea
                  name="message"
                  value={this.state.message}
                  onChange={(e) => this.changeHandler(e)}
                  placeholder={this.getMessage()} 
                ></textarea>
          </div>
          <div className={styles.buttonCenter}>
            <button className={styles.submitButton} type="submit">
              {this.getSubmit()}
            </button>
          </div>
        </form>
      </div>
      <Else><Success/></Else>
  </If>
    );
  }
}

export default Form;
