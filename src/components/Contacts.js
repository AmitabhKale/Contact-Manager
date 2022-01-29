import React, { Component, Fragment } from 'react';
import Contact from './Contact';

class Contacts extends Component {
constructor(){
    super();
    this.state = {
        contacts : [
            {
                id:1,
                name:'John Doe',
                email:'jdoe@gmail.com',
                phone:'999-111-3333'
            },
            {
                id:2,
                name:'Steve Smith',
                email:'steve@gmail.com',
                phone:'999-111-2222'
            }
        ]
    }
}

deleteContact = (id) => {
    const { contacts } = this.state;
    const newContact = contacts.filter(contact => 
        contact.id !== id);

    this.setState({
        contacts:newContact
    })
}

  render() {
    const { contacts } = this.state
    return (
       
    <Fragment>
        {contacts.map(contact => (
            <Contact 
                key={contact.id}
                contact={contact}
                deleteClickHandler={this.deleteContact.bind(this,contact.id)}
                // name={contact.name}
                // email={contact.email}
                // phone={contact.phone}
            />
        ))}
    </Fragment>
    )
  }
}

export default Contacts
