import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./Components/Phonebook/Phonebook";
import ContactList from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";

import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  //добавлення контакту в список(стейт)
  addContact = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    const { contacts } = this.state;
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts!`);
      return;
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  //видалення кнопкою з стейта
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  //фыльтрування
  filteredContacts = (e) => {
    this.setState({ filter: e.target.value });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const {
      addContact,
      filteredContacts,
      showFilteredContacts,
      deleteContact,
    } = this;

    return (
      <div className="App">
        <h2>Phonebook</h2>
        <ContactForm addContact={addContact} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          filteredContacts={filteredContacts}
        />
        <ContactList
          contacts={showFilteredContacts()}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
