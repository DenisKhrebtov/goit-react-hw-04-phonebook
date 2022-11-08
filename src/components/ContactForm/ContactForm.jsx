import { useState } from 'react';

import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';

import {
  AddForm,
  AddLabel,
  InputName,
  InputNumber,
  AddBtn,
} from './ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'contact') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <AddForm onSubmit={handleSubmit}>
      <AddLabel>
        Name
        <InputName
          id={nanoid()}
          type="text"
          name="contact"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
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
          value={number}
          onChange={handleChange}
        />
      </AddLabel>
      <AddBtn type="submit">Add contact</AddBtn>
    </AddForm>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
