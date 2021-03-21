import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className={styles.container}>
                <form name="contact" method="post" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="form-name" value="contact"/>

                    <div className={styles.inputField}>
                        <input type="text" name="name" placeholder="Your name..."></input>
                        <input type="text" name="phone" placeholder="Your phonenumber..."/>
                    </div>
                    <div className={styles.inputFieldMail}>
                        <input type="email" name="email" placeholder="Your Email..."/>
                    </div>
                    <div className={styles.inputField}>
                        <textarea type="text" name="comments" placeholder="Your comments"/>
                    </div>
                    
                    <button className={styles.submitButton} type="submit">Submit</button>
      
                    
                </form>
            </div>
         );
    }
}
 
export default Form;