import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../css/App.css";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";
import CreateContact from "./CreateContact";

const App = () => {

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

  let navigate = useNavigate()

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };
    getContacts();
  }, []);

   const removeContact = (contact) => {
      ContactsAPI.remove(contact);
      setContacts(contacts.filter((c) => c.id !== contact.id));
    }

  const createContact = (contact) => {
      const create = async () => {
        const res = await ContactsAPI.create(contact);
        setContacts(contacts.concat(res));
      };
      create();
      navigate("/");

  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        }
      />
      <Route
        path="/create"
        element={
          <CreateContact
            onCreateContact={createContact}
          />
        }
      />
    </Routes>
  );
};


export default App;
