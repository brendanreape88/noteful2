import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import Note from "../Note/Note";
import { getNotesForFolder } from "../note-helpers";
import PropTypes from "prop-types";

class MainNoteList extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = AppContext;

  render() {
    const { folderId } = this.props.match.params;
    const folderNumberId = parseFloat(folderId);
    console.log(folderId);
    console.log(folderNumberId);
    const { notes = [] } = this.context;
    console.log(notes);
    const notesForFolder = getNotesForFolder(notes, folderNumberId);
    console.log(notesForFolder);
    return (
      <section className="note-list-main">
        <ul>
          {notesForFolder.map((note) => (
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                content={note.content}
                modified={note.modified}
                history={this.props.history}
              />
            </li>
          ))}
        </ul>
        <button>
          <Link to="/add-note">+ add note</Link>
        </button>
      </section>
    );
  }
}

MainNoteList.propTypes = {
  folderId: PropTypes.number,
};

export default MainNoteList;
