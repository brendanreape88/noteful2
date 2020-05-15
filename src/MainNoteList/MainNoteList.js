import React from 'react'
import AppContext from '../AppContext'
import Note from '../Note/Note'

class MainNoteList extends React.Component {
    static contextType = AppContext

    render() {
        const noteContext = this.context

        return(
            <section className="note-list-main">
                <ul>
                    {noteContext.map(data => 
                        <li key={data.notes.noteId}>
                            <Note
                                name={data.notes.name}
                                content={data.notes.content}
                                noteId={data.notes.noteId}
                                folderId={data.notes.folderId}
                            />
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}

export default MainNoteList