import React, {Component} from './node_modules/react'
import AppContext from '../AppContext'
import config from '../config'

class AddFolder extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
    }
    static contextType = AppContext

    handleSubmit = (event) => {
        event.preventDefault()
        const note = {
            folderName: event.target["folder-name"].value,
            noteName: event.target["note-name"].value,
            noteContent: event.target["note-content"].value
        }
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note),
        })
        .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          .then(note => {
            this.context.addNote(note)
            this.props.history.push(`/note/${note.id}`)
          })
          .catch(error => {
            console.error({ error })
          })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        let's take a note : )
                        <br />
                        <input 
                            type="text" 
                            placeholder="folder name"
                            name="folder-name"
                            id="folder-name-input"
                        />
                        <input 
                            type="text" 
                            placeholder="note name"
                            name="note-name"
                            id="note-name-input"
                        />
                        <input 
                            type="text" 
                            placeholder="type your message here..."
                            name="note-content"
                            id="note-content-input"
                        />
                    </label>
                    <br />
                    <button>submit note</button>
                </form>
            </div>
        )
    }


}

export default AddFolder