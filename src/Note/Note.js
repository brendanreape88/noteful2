import React from 'react'
import AppContext from '../AppContext'
import { Link } from 'react-router-dom'

class Note extends React.Component {
    static contextType = AppContext

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