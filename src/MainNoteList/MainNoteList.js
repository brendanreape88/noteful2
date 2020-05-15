import React from 'react'
import AppContext from '../AppContext'
import Note from '../Note/Note'
import { getNotesForFolder } from '../notes-helpers'

class MainNoteList extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext

    render() {
        {/*const noteContext = this.context.notes*/}
        const { folderId } = this.props.match.params
        const { notes=[] } = this.context
        const notesForFolder = getNotesForFolder(notes, folderId)
        return(
            <section className="note-list-main">
                <ul>
                    {notesForFolder.map(note =>
                        <li key={note.id}>
                            <Note
                                id={note.id}
                                name={note.name}
                                content={note.content}
                            />
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}

export default MainNoteList