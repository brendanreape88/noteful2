import React from 'react'
import AppContext from '../AppContext'
import Note from "../Note/Note"
import { findNote } from '../note-helpers'
import PropTypes from 'prop-types'

class NoteContent extends React.Component {
    static contextType = AppContext

    render() {
        const { notes=[] } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || { content: '' }
        return(
            <div className="note-content-div">
                <Note
                    id={note.id}
                    name={note.name}
                />
                <div>
                    <p>{note.content}</p>
                </div>
            </div>
        )
    }
}

NoteContent.propTypes = {
    noteId: PropTypes.string.isRequired
}

export default NoteContent