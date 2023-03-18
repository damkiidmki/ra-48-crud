import { nanoid } from 'nanoid'
import React, { useState, useEffect } from 'react'
import Input from './Input'
import ListNodes from './ListNodes'

export default function NotesContainer() {
    const [notes, setNotes] = useState([])
    const [text, setText] = useState('')

    useEffect(() => {
        update()
    }, []);

    const handleChangeText = (event) => {
        setText(event.target.value)
    }
    const update = () => {
        fetch('http://localhost:7777/notes')
            .then(res => res.json())
            .then(result => {
                setNotes(result)
            })
    }
    
    const handleAdd = (event) => {
        fetch('http://localhost:7777/notes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "id": nanoid(),
                "content": text
            })
        })
        .then(response => {
            if (response.ok) {
                update()
            }
        })

    }

    const handleDelete = (event) => {
        fetch(`http://localhost:7777/notes/${event.target.dataset.id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                update()
            }
        })
    }

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col">
                    <h4>Notes</h4>
                </div>
                <div className="col">
                    <button className="btn btn-info" onClick={update}>Обновить</button>
                </div>
            </div>
            <ListNodes handleDelete={handleDelete} notes={notes} ></ListNodes>
            <Input handleAdd={handleAdd} handleChangeText={handleChangeText} text={text} ></Input>
        </div>
    )
}
