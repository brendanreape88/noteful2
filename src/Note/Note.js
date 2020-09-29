import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppContext from "../AppContext";
import config from "../config";

class Note extends React.Component {
  static contextType = AppContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;
    console.log(noteId);

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteNote(noteId);
        this.props.history.push(`/`);
        console.log(this.props);
        //this.props.onDeleteNote(noteId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { name, id } = this.props;

    return (
      <div className="note-div">
        <h3>
          <Link to={`/note/${id}`}>{name}</Link>
        </h3>
        <button
          className="Note__delete"
          type="button"
          onClick={this.handleClickDelete}
        >
          delete
        </button>
      </div>
    );
  }
}

Note.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Note;
