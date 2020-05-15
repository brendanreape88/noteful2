import React, {Component} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import AppContext from './AppContext';
import MainNoteList from './MainNoteList/MainNoteList'
import NavFolderList from './NavFolderList/NavFolderList'
import NoteContent from './NoteContent/NoteContent'

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  renderNoteRoutes() {
    return(
      <>
        <Route exact path="/" component={MainNoteList} />
        <Route path="folder/:folderId" component={MainNoteList} />
        <Route path="/note/:noteId" component={NoteContent} />
      </>
    )
  }

  renderFolderRoutes() {
    return(
      <>
        <Route path="/" component={NavFolderList} />
        <Route path="folder/:folderId" component={MainNoteList} />
      </>
    )
  }

  render() {
    const value = {    notes: [
      {name: "red", content: "red is a color", noteId: 1, folderId: 1},
      {name: "blue", content: "blue is a color", noteId: 2, folderId: 1},
      {name: "yellow", content: "yellow is a color", noteId: 3, folderId: 1},
      {name: "cumulus", content: "cumulus is a type of cloud formation", noteId: 4, folderId: 2},
      {name: "stratus", content: "stratus is a type of cloud formation", noteId: 5, folderId: 2},
      {name: "green tea", content: "green tea is a type of tea", noteId: 6, folderId: 3},
      {name: "black tea", content: "black tea is a type of tea", noteId: 7, folderId: 3}
    ],
    folders: [
      {name: "primary colors", folderId: 1},
      {name: "clouds", folderId: 2},
      {name: "teas", folderId: 3}
    ]};

    return(
      <AppContext.Provider value={value}>
        <div className="app">
          <header className="app-header">
            <h1 className="ap-title">noteful</h1>
          </header>
          <main className="main">
            <div class="sidebar">
              {this.renderFolderRoutes()}
            </div>
            <div className="main-content">
              {this.renderNoteRoutes()}
            </div>
          </main>
        </div>
      </AppContext.Provider>
    )
  }
}

export default App;