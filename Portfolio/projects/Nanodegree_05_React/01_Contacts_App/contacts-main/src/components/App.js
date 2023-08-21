import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";

const App = () => {

  const removeContact = (contact) => {
    ContactsAPI.remove(contact);
    setContacts(contacts.filter((c) => c.id !== contact.id));
  }

  //  Hardcoded contacts
  // const [contacts, setContacts] = useState([
  //   {
  //     id: "tyler",
  //     name: "Tyler McGinnis",
  //     handle: "@tylermcginnis",
  //     avatarURL: "http://localhost:5001/tyler.jpg",
  //   },
  //   {
  //     id: "karen",
  //     name: "Karen Isgrigg",
  //     handle: "@tylermcginnis",
  //     avatarURL: "http://localhost:5001/karen.jpg",
  //   },
  //   {
  //     id: "abc",
  //     name: "Tyler McGinnis",
  //     handle: "@tylermcginnis",
  //     avatarURL: "http://localhost:5001/richard.jpg",
  //   },
  // ])


  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };
    getContacts();
  }, []);

  return <div>
    <ListContacts contacts={contacts} onDeleteContact={removeContact} />
  </div>;
};

export default App;
