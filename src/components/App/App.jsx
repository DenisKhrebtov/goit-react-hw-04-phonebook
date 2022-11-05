import React from 'react';

import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ContactsState } from 'constance/contacts';

import { Wrapper, Title } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: ContactsState,
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContacts = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContacts} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
