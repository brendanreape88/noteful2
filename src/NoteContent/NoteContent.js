import React from "react";
import AppContext from "../AppContext";
import Note from "../Note/Note";
import { findNote } from "../note-helpers";
import PropTypes from "prop-types";

class NoteContent extends React.Component {
  static contextType = AppContext;

  render() {
    const { notes = [] } = this.context;
    const { noteId } = this.props.match.params;
    const noteNumberId = parseInt(noteId);
    const note = findNote(notes, noteNumberId) || { content: "" };
    return (
      <div className="note-content-div">
        <Note id={note.id} name={note.name} history={this.props.history} />
        <div>
          <p>{note.content}</p>
        </div>
        <span>{note.modified}</span>
      </div>
    );
  }
}

NoteContent.propTypes = {
  noteId: PropTypes.number.isRequired,
};

export default NoteContent;
