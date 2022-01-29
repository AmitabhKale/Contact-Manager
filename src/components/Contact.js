import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
    // Typechecking with props inside the class
    // static propTypes = {
    //     name : PropTypes.string.isRequired,
    //     email : PropTypes.string.isRequired,
    //     phone : PropTypes.string.isRequired
    // }

    state = {
        showContactInfo : false
    }
    onShowClick = (e) => {
        this.setState({ showContactInfo: !this.state.showContactInfo})
    }
onDeleteClick = () => {
    this.props.deleteClickHandler();
}

  render() {
      const {name, email, phone } = this.props.contact;
      const {showContactInfo} = this.state;
      return(
          <div className='card card-body mb-3'>
              <h3>{name} <i onClick={this.onShowClick} className="fas fa-sort-down"></i></h3>
              <i
                onClick={this.onDeleteClick} 
                className="fas fa-times"
                style={{color:'red', cursor:'pointer',float:'right'}}
              ></i>
              {showContactInfo?(<ul className='list-group'>     
              <li className='list-group-item'>Email : {email}</li>
              <li className='list-group-item'>Phone : {phone}</li>
              </ul>):null}
              
          </div>
          )
  }
}

// Typechecking with props outside the class
// Contact.propTypes = {
//     name : PropTypes.string.isRequired,
//     email : PropTypes.string.isRequired,
//     phone : PropTypes.string.isRequired
// }

Contact.propTypes = {
        contact : PropTypes.object.isRequired,
        deleteClickHandler:PropTypes.func.isRequired
}
export default Contact