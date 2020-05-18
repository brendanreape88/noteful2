import React from 'react'
import AppContext from '../AppContext'
import { findNote, findFolder } from '../note-helpers'
import './FolderContent.css'


class FolderContent extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        },
        match: {
          params: {}
        }
    }

    static contextType = AppContext;

    render() {
        const { notes, folders, } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || {}
        const folder = findFolder(folders, note.folderId)
        console.log(folder)
        return (
            <div>
                {folder && (
                <h1 className="verticalFolder">{folder.name}</h1>
                )}
            </div>
        )
    }

    
}

export default FolderContent