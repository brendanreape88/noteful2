import React, { Component } from "react";
import AppContext from "../AppContext";
import config from "../config";
import HasError from "../HasError/HasError";

class AddFolder extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = AppContext;

  handleSubmit = (event) => {
    event.preventDefault();
    const folder = {
      folder_name: event.target["folder-name"].value,
    };
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(folder),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((folder) => {
        this.context.handleAddFolder(folder);
        this.props.history.push(`/folders/${folder.id}`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <div>
        <HasError>
          <form onSubmit={this.handleSubmit}>
            <label>
              let's make a folder : )
              <br />
              <input
                type="text"
                placeholder="folder name"
                name="folder-name"
                id="folder-name-input"
                required
                aria-required="true"
                aria-describedby="newFolderRequirement"
              />
              <div id="newFolderRequirement">please type in a folder name</div>
            </label>
            <br />
            <button>submit folder</button>
          </form>
        </HasError>
      </div>
    );
  }
}

//onClick={() => this.props.history.goBack()}
export default AddFolder;
