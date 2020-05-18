import React, {Component} from 'react'
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
        const folder = {
            name: event.target["folder-name"].value
        }
        fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(folder),
        })
        .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          .then(folder => {
            this.context.addFolder(folder)
            this.props.history.push(`/folder/${folder.id}`)
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
                        let's make a folder : )
                        <br />
                        <input 
                            type="text" 
                            placeholder="folder name"
                            name="folder-name"
                            id="folder-name-input"
                        />
                    </label>
                    <br />
                    <button>submit folder</button>
                </form>
            </div>
        )
    }


}

export default AddFolder