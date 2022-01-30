import axios from 'axios';
import React, { Component } from 'react';
import { Consumer } from '../../context';
// import {v4 as uuid} from "uuid"; 
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        errors:{}
    }
    onChange = e => this.setState({[e.target.name] : e.target.value})

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const {name,email,phone} = this.state;

        if(name ===''){
            this.setState({errors: { name: 'Name is Required'}})
            return
        }
        if(email ===''){
            this.setState({errors: { email: 'Email is Required'}})
            return
        }
        if(phone ===''){
            this.setState({errors: { phone: 'Phone is Required'}})
            return
        }

        const newContact = {
            name,
            email,
            phone
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`,newContact)
        .then(res => dispatch({ type:'ADD_CONTACT',payload:res.data }) )

        

        // clear state
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors: {}
        })
    }
  render() {
      const {name,email,phone,errors} = this.state
    return(
      <Consumer>
        {value => {
            const {dispatch} = value;
            return (
        <div className="card mb-3">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                   
                    <TextInputGroup 
                        label="Name"
                        name="name"
                        type='text'
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                    />
                    <TextInputGroup 
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                    />
                    <TextInputGroup 
                        label="Phone"
                        name="phone"
                        type='text'
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
                    />
                    
                    <div className="d-grid gap-2 mt-3">
                        <input     
                        type="submit" 
                        value="Add Contact"
                        className='btn btn-light btn-block'
                    />
                    </div>
                </form>
            </div>
        </div>
    )
        }}
      </Consumer>
    )
  }
}

export default AddContact
