import React from 'react'
import { Link } from 'react-router-dom'

class Note extends React.Component {

    render() {
        const { name, noteId } = this.props

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