export default function Input({handleAdd, text, handleChangeText}){

    return (
        <>
            <div className="form-outline mt-2">
                <textarea 
                    className="form-control" 
                    id="textAreaExample1" 
                    rows="4"                 
                    value={text}
                    onChange={handleChangeText}>
                </textarea>
            </div>
            <button onClick={handleAdd} className="btn btn-success mt-1">Добавить</button>
        </>
    )
}