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
    // console.log(this.context);
    // const folderId = this.props.match.params;
    // console.log(folderId);
    // const matchedFolder = this.context.folders.find(
    //   (folder) => folder.id === folderId
    // );
    // console.log(matchedFolder);
    const { notes, folders } = this.context;
    const { noteId } = this.props.match.params;
    const note = findNote(notes, noteId) || {};
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
  noteId: PropTypes.string.isRequired,
};

export default FolderContent;
