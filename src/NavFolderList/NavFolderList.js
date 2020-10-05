import React from "react";
import { NavLink, Link } from "react-router-dom";
import AppContext from "../AppContext";
import config from "../config";

class NavFolderList extends React.Component {
  static contextType = AppContext;

  // handleClickDelete = (id) => {
  //   //e.preventDefault();
  //   //const folderId = this.props.id;
  //   alert(`delete folder in NavFolderList.js clicked`);
  //   console.log(id);

  //   fetch(`${config.API_ENDPOINT}/folders/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) return res.json().then((e) => Promise.reject(e));
  //       return res.json();
  //     })
  //     .then(() => {
  //       this.context.deleteFolder(id);
  //       this.props.onDeleteFolder(id);
  //     })
  //     .catch((error) => {
  //       console.error({ error });
  //     });
  // };

  render() {
    const { folders = [], notes = [] } = this.context;
    return (
      <div>
        <ul>
          {folders.map((folder) => (
            <li key={folder.id}>
              <NavLink to={`/folders/${folder.id}`}>
                {folder.folder_name}
              </NavLink>
            </li>
            // <button
            //   className="Folder__delete"
            //   type="button"
            //   onClick={this.handleClickDelete(folder.id)}
            // >
            //   delete
            // </button>
          ))}
        </ul>
        <button>
          <Link to="/add-folder">+ add folder</Link>
        </button>
      </div>
    );
  }
}

export default NavFolderList;
