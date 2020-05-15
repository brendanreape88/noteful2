import React from 'react'
import AppContext from '../AppContext'

class NoteContent extends React.Component {
    static contextType = AppContext

    render() {
       
        return(
            <div className="note-content-div">
                <h3>{name}</h3>
                <p>{content}</p>
            </div>
        )
    }
}

export default NoteContent