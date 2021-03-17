import React from "react";
import s from "../Phonebook/Phonebook.module.css";

const Filter = ({ filter, filteredContacts }) => (
  <label className={s.filter_label}>
    To make filter by Name
    <input
      className={s.filter_input}
      type="text"
      value={filter}
      onChange={filteredContacts}
    ></input>
  </label>
);

export default Filter;
