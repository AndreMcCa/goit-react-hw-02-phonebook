import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input/Input';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChande = e => {
        const nameInput = e.target.name;
        const value = e.target.value;
    
        this.setState({[nameInput]: value})
      }

    handleSubmit = e => {
        e.preventDefault();

        const {name, number} = this.state;
    
        if(name !== '' && number !== '') {
            this.props.addContact(name, number);
        }

        this.reset();
    }

    reset = () => this.setState({name: '', number: ''})

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit} key={this.props.id}>
                <Input label="Name" type="text" name="name" value={name} onChange={this.handleChande}/>
                <Input label="Number" type="text" name="number" value={number} onChange={this.handleChande}/>

                <button type='submit'>Add</button>
            </form>
        )
    }


}

export default ContactForm;

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}