import React, { Component } from "react";
import styles from "./Form.module.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSubmit = (event) => {
    event.preventDefault();

    const data = {
      "form-name": "contact",
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      message: this.state.message,
      userEmail: this.state.userEmail,
      userTelefonNummber: this.state.userTelefonNummber,
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(this.createFormDataObj(data)).toString(),
    })
      .then(() => {
        this.setState({
          notification: "Daten wurden abgeschickt",
          sended: true,
        });
        // TODO Felder leeren
        console.log(this.state.notification);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          notification: "Fehlerlein... " + error,
          sended: true,
        });
        console.log(this.state.notification);
      });
  };
  getName = () => {
    console.log(this.props.language);
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
      <div className={styles.container}>
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
                  type="text"
                  name="name"
                  placeholder={this.getName()}
                ></input>
              </div>
              <div className={styles.phoneInput}>
                <input
                  type="text"
                  name="phone"
                  placeholder={this.getTelefon()}
                />
              </div>
            </div>
          </div>
          <div className={styles.inputFieldMail}>
            <input type="email" name="email" placeholder="E-Mail" />
          </div>
          <div className={styles.inputField}>
            <textarea
              type="text"
              name="comments"
              placeholder={this.getMessage()}
            />
          </div>
          <div className={styles.buttonCenter}>
            <button className={styles.submitButton} type="submit">
              {this.getSubmit()}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
