import React, { Component } from 'react';
import { v4 as randId } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContactToState = (contact) => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  };
  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }
  render() {
    const { contacts, name, number, filter } = this.state;
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div className={styles.container} >
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContactToState={this.addContactToState} />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={filter} />
        <ContactList visibleContacts={visibleContacts} deleteContact={this.deleteContact} />
      </div >
    );
  }
}

export default App;

