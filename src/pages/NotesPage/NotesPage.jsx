import { checkToken } from "../../utilities/users-service";
import * as notesAPI from "../../utilities/notes-api";
import NewNote from "../../components/NewNote/NewNote";
import Note from "../../components/Note/Note";
import { useState } from 'react';

export default function Notes() {

    const [notes, setNotes] = useState([]);

    function addNewNote(note) {
        setNotes([...notes, note]);
      }

    // Get notes
    const getNotes = async function() {
        await notesAPI.getAll();
    }
    console.log(notes)

    const notesList = notes.map((n, idx) => {
       <Note note={n} key={idx} />
    })
    
    async function handleCheckToken() {
        const expDate = await checkToken()
        alert(`Expires on ${expDate}`)
    }

    return (
        <>
            <h1>Notes Page</h1>
            <NewNote addNewNote={addNewNote} />
            <button onClick={ handleCheckToken }>Check When My Login Expires</button>
            { notes ?
            <ul>
                {notesList}
            </ul>
            :
            <h3>No notes yet</h3>
            }
        </>
    );
}