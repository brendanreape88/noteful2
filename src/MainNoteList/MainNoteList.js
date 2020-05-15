import React from 'react'
import AppContext from '../AppContext'
import Note from '../Note/Note'

class MainNoteList extends React.Component {
    static contextType = AppContext

    render() {
        const noteContext = this.context.notes

        return(
            <section className="note-list-main">
                <ul>
                    {noteContext.map(data => 
                        <li key={data.noteId}>
                            <Note
                                name={data.name}
                                content={data.content}
                                noteId={data.noteId}
                                folderId={data.folderId}
                            />
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}

export default MainNoteList