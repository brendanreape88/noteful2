import React from 'react'
import Context from 'Context.js'
import Note from '../Note/Note'

class MainNoteList extends React.Component {
    static contextType = Context

    render() {
        const { name, content, noteId, folderId } = this.context

        return(
            <section className="note-list-main">
                <ul>
                    {something.map( => 
                        <li key={noteId}>
                            <Note
                                id={noteId}
                                name={name}
                            />
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}

export default MainNoteList