import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';

import {
  AddForm,
  AddLabel,
  InputName,
  InputNumber,
  AddBtn,
} from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(contact);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <AddForm onSubmit={this.handleSubmit}>
        <AddLabel>
          Name
          <InputName
            id={nanoid()}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </AddLabel>
        <AddLabel>
          Number
          <InputNumber
            id={nanoid()}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </AddLabel>
        <AddBtn type="submit">Add contact</AddBtn>
      </AddForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
