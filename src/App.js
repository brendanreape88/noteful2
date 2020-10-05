import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import AppContext from "./AppContext";
import MainNoteList from "./MainNoteList/MainNoteList";
import NavFolderList from "./NavFolderList/NavFolderList";
import NoteContent from "./NoteContent/NoteContent";
import FolderContent from "./FolderContent/FolderContent";
import config from "./config";
import AddFolder from "./AddFolder/AddFolder";
import AddNote from "./AddNote/AddNote";

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
        console.log(this.state);
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  renderFolderRoutes() {
    return (
      <>
        {["/", "/folders/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={NavFolderList} />
        ))}
        <Route path="/notes/:noteId" component={FolderContent} />
        <Route path="/add-folder" component={AddFolder} />
      </>
    );
  }

  renderNoteRoutes() {
    return (
      <>
        {["/", "/folders/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={MainNoteList} />
        ))}
        <Route path="/notes/:noteId" component={NoteContent} />
        <Route path="/add-note" component={AddNote} />
      </>
    );
  }

  handleAddFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder],
    });
  };

  handleAddNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note],
    });
  };

  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
  };

  handleDeleteFolder = (folderId) => {
    this.setState({
      notes: this.state.notes.filter((folder) => folder.id !== folderId),
    });
  };

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      handleAddFolder: this.handleAddFolder,
      handleAddNote: this.handleAddNote,
      deleteNote: this.handleDeleteNote,
      deleteFolder: this.handleDeleteFolder,
    };

    return (
      <AppContext.Provider value={value}>
        <div className="app">
          <header className="app-header">
            <h1 className="ap-title">
              <Link to="/">noteful</Link>
            </h1>
          </header>
          <main className="main">
            <div className="sidebar">{this.renderFolderRoutes()}</div>
            <div className="main-content">{this.renderNoteRoutes()}</div>
          </main>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
