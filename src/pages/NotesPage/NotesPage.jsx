import { checkToken } from "../../utilities/users-service";
export default function Notes() {
    // Get notes
    const notes = null;

    
    async function handleCheckToken() {
        const expDate = await checkToken()
        alert(`Expires on ${expDate}`)
    }

    return (
        <>
            <h1>Notes Page</h1>
            <button onClick={ handleCheckToken }>Check When My Login Expires</button>
            { notes ?
            <ul>
                { notes }
            </ul>
            :
            <h3>No notes yet</h3>
            }
        </>
    );
}