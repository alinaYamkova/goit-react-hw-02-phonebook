import React from "react";
import PropTypes from "prop-types";
import s from "../Phonebook/Phonebook.module.css";
// import { v4 as uuidv4 } from "uuid";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ol>
      {contacts.map(({ id, name, number }) => (
        <li className={s.list} key={id}>
          <p className={s.text}>{name}, </p>
          <p className={s.text}>tlf.: {number}</p>
          <button
            type="button"
            className={s.btn_del}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
