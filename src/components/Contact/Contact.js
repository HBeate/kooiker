import React, { Component } from "react";
import Form from "../Form/Form";
import styles from "./Contact.module.css";
import {Helmet} from "react-helmet";

class Contact extends Component {
  state = {};
  getTitle = () => {
    let contactTitle = "";
    switch (this.props.language) {
      case "de":
        contactTitle = "Kontakt";
        break;
      case "en":
        contactTitle = "Contact";
        break;
      default:
        contactTitle = "Le contact";
    }
    return contactTitle;
  };
  render() {
    return (
      <div>
                            <Helmet> 
          <title>Contact | Kooikerhondje</title>
          <meta
            name="description"
            content="Kooikerhondje de la bande de rigolos"
          />
          <meta
            name="keywords"
            content="Kooikerhondje, Kooiker, breeding, puppies, France"
          />
          <link rel="canonical" href="https://kooiker-fr.com/contact" />
          </Helmet>
        <div>
          <iframe
            title="GoogleMap"
            src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d11540.194209343405!2d0.0047!3d43.688754!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d43.6902871!2d0.004663!5e0!3m2!1sde!2sus!4v1616435576475!5m2!1sde!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.headerKontakt}>
          <h1 >{this.getTitle()}</h1>
        </div>

        <div className={styles.contact2}>
          <div className={styles.mailContact}>
            <p>Chemin de Lanegrand; 32400 Fustérouau</p>
            <a
              className={styles.iFrame}
              href="mailto: helga-henny@kooiker-fr.com"
            >
              <i className="far fa-envelope"></i>
              &nbsp;helga-henny@kooiker-fr.com
            </a>
          </div>
          <Form language={this.props.language} />
        </div>
      </div>
    );
  }
}

export default Contact;
