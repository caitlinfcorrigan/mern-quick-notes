import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import React from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNote from '../../components/NewNote/NewNote';
import NotesPage from '../NotesPage/NotesPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
    { user ?
      <>
        <NavBar user={ user } setUser={ setUser }/>
        <Routes>
          <Route path="/notes" element={ <NotesPage /> } />
        </Routes>
      </>
      :
      <AuthPage setUser={ setUser } />
    }
    </main>
  );
}
