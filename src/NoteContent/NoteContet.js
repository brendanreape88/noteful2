import React from 'react'

class NoteContent extends React.Component {
    render() {
        const { name, content, noteId } = this.props.notes
        return(
            <div className="note-content-div">
                <h3>{name}</h3>
                <p>{content}</p>
            </div>
        )
    }
}

export default NoteContent