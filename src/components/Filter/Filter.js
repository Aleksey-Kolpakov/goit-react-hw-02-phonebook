import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css'
const Filter = ({ filter, handleChange }) => {
    return (
        <label>
            Find contacts by name
              <input
                className={styles.input}
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
            />
        </label>
    );
};

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}