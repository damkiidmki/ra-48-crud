export default function ListNodes({handleDelete, notes}){
    
    return(
        <ul className="list-group mt-2">
        {
            notes.map(note =>
            <li className="list-group-item" key={note.id}>
                {note.content}
                <button
                    data-id={note.id}
                    className="float-sm-right btn btn-danger"
                    onClick={handleDelete}>x
                </button>
            </li>)}
        </ul>
    )
}