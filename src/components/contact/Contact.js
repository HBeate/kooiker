import React, { Component } from 'react';
import Form from '../Form/Form';

class Contact extends Component {
    state = {}
    render() {
        return (
            <div>  
                <div>
                    {/*                 <a href="tel:+1-555-555-1212">555-555-1212</a>
 */}                <a href="tel:+15555551212">555-555-1212</a>
                </div>
                <div>
                    <Form/>
                </div>

            </div>
        );
    }
}

export default Contact;