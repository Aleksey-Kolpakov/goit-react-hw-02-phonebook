import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'
const ContactList = ({ visibleContacts, deleteContact }) => {
    return (
        <ul className={styles.list}>
            {visibleContacts.map(contact => (
                <li key={contact.id} className={styles.item}>{contact.name}:{contact.number}
                    <button className={styles.button} type="button" onClick={() => deleteContact(contact.id)}>Delete contact</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    deleteContact: PropTypes.func.isRequired
}