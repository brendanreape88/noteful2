import React, {Component} from 'react'
import AppContext from '../AppContext'
import config from '../config'
import HasError from '../HasError/HasError'

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
            folderId: event.target["folder-id"].value,
            name: event.target["note-name"].value,
            content: event.target["note-content"].value
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
        const folderList = this.context.folders
        return (
            <div>
                <HasError>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        let's take a note : )
                        <br />
                        <select 
                            name="folder-id"
                            id="folder-id-input"
                            required
                        >
                            {folderList.map(f => 
                            <option 
                                value={f.id}
                            >
                                {f.name}
                            </option>
                            )}
                        </select>
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
                    <button onClick={() => this.props.history.goBack()}>submit note</button>
                </form>
                </HasError>
            </div>
        )
    }


}

export default AddFolder