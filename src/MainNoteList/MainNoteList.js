import React from 'react'
import Context from 'Context'
import Note from '../Note/Note'

class MainNoteList extends React.Component {
    static contextType = Context

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