import React, { Component } from 'react';
import { v4 as randId } from 'uuid';

class PhoneBook extends Component {
    state = {
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        name: '',
        number: ''
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
        const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
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

export default PhoneBook;
