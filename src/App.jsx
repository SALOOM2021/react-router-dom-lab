// src/App.jsx
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import NavBar from "./components/NavBar/NavBar";
const initialState = [{
  _id: 1,
  boxSize: 'Small',
  boxOwner: 'Alex',
}];


const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);
  const addMailbox = (formData) => {
    formData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, formData])
  }


  return (
    <>
      <NavBar />
      <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>}></Route>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}></Route>
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />}></Route>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}></Route>
        <Route path='*' element={<h2>Whoops, nothing here!</h2>}></Route>
      </Routes>
    </>
  )
};

export default App;
