import { useState, useEffect } from 'react';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactForm/ContactList';
import { Filter } from '../Filter/Filter';
import { ContactsState } from '../../constance/contacts';
import { getLocal, setLocal } from '../../utils/localStorage';

import { Wrapper, Title } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    getLocal('contacts') ?? ContactsState
  );
  const [filterContact, setFilterContact] = useState('');

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const addContacts = newContact => {
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevState => [newContact, ...prevState]);
  };

  const changeFilter = e => {
    setFilterContact(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normilizedFilter = filterContact.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  useEffect(() => {
    setLocal('contacts', contacts);
  }, [contacts]);

  const filterContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContacts} />
      <Title>Contacts</Title>
      <Filter value={filterContact} onChange={changeFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </Wrapper>
  );
}
