import React from "react";
import AppContext from "../AppContext";
import { findNote, findFolder } from "../note-helpers";
import "./FolderContent.css";
import PropTypes from "prop-types";

class FolderContent extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {},
    },
    match: {
      params: {},
    },
  };

  static contextType = AppContext;

  render() {
    const { notes, folders } = this.context;
    const { noteId } = this.props.match.params;
    const noteNumberId = parseInt(noteId);
    const note = findNote(notes, noteNumberId) || {};
    console.log(note);
    const folder = findFolder(folders, note.folder);
    console.log(folder);
    return (
      <div>
        {folder && <h1 className="verticalFolder">{folder.folder_name}</h1>}
      </div>
    );
  }
}

FolderContent.propTypes = {
  noteId: PropTypes.number.isRequired,
};

export default FolderContent;
