import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import {Consumer} from '../../context'

class Contacts extends Component {
  render() {

    return (
        <Consumer>
        {value => {
            const {contacts} = value;
            return(
                <Fragment>
                    <h1 className="display-4 mb-2">
                      <span className="text-success">
                        Contact
                      </span> List
                    </h1>

                    {contacts.map(contact => (
                    <Contact 
                    key={contact.id}
                    contact={contact}
                    deleteClickHandler={this.deleteContact}
                    />
                ))}
                </Fragment>
        )}}
        </Consumer>
       
    
    )
  }
}

export default Contacts
