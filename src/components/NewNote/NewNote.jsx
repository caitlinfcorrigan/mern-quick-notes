import { useState } from 'react';
import * as notesAPI from '../../utilities/notes-api';

export default function NewNote({ addNewNote }) {
    const [newNote, setNewNote] = useState("")
    function handleAddTodo(e) {
        e.preventDefault();
        // Add the note to the DB
        // Call the notesAPI to kick off journey to controller
        notesAPI.addNote(newNote);
        console.log(newNote);
        // Add the note to the Notes state
        addNewNote(newNote)
        setNewNote("");
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input 
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Type your new note here"
                    required
                    pattern=".{4,}"
                />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}