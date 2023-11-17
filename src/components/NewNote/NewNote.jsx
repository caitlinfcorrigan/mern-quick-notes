import { useState } from 'react';

export default function NewNote({ addNewNote }) {
    const [newNote, setNewNote] = useState("")
    function handleAddTodo(e) {
        e.preventDefault();
        // Add the note to the DB
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