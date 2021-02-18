import React, { Component } from 'react';
import { v4 as randId } from 'uuid';
import styles from './App.module.css';
import Profile from './components/Profile/Profile';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  };
  createContact = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const id = randId();
    const contact = {
      id,
      name: name,
      number: number
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
    this.resetForm()
  }
  resetForm = () => {
    this.setState({
      name: '',
      number: ''
    })
  }

  render() {
    const { contacts, name, number, filter } = this.state;
    const visibleContacts = contacts.filter(contact => contact.name.includes(filter));
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.createContact} >
          <label>
            Name
          <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Name
          <input
              type="text"
              placeholder="Enter Phone"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h3>Contacts</h3>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleChange}
          />
        </label>
        <ul className={styles.list}>
          {visibleContacts.map(contact => (
            <li key={contact.id} className={styles.item}>{contact.name}:{contact.number}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;

