import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
    const newContact = { ...contact, id: newId };
    setContacts([...contacts, newContact]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/" element={<ContactList contacts={contacts} removeContactHandler={removeContactHandler} />} />
      </Routes>
    </Router>
  );
}

export default App;
