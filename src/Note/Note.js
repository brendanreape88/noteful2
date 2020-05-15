import React from 'react'
import Context from 'src/Context.js'
import { Link } from 'react-router-dom'

class Note extends React.Component {
    static contextType = Context

    render() {
        const { name, noteId } = this.context.notes

        return(
            <div className="note-div">
                <h3>
                    <Link to={`note/${noteId}`}>
                        {name}
                    </Link>
                </h3>
            </div>
        )
    }
}

export default Note