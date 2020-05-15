import React, {Component} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import AppContext from './AppContext';
import MainNoteList from './MainNoteList/MainNoteList'
import NavFolderList from './NavFolderList/NavFolderList'
import NoteContent from './NoteContent/NoteContent'
import FolderContent from './FolderContent/FolderContent'
import config from './config'

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/notes`),
        fetch(`${config.API_ENDPOINT}/folders`)
    ])
        .then(([notesRes, foldersRes]) => {
            if (!notesRes.ok)
                return notesRes.json().then(e => Promise.reject(e));
            if (!foldersRes.ok)
                return foldersRes.json().then(e => Promise.reject(e));

            return Promise.all([notesRes.json(), foldersRes.json()]);
        })
        .then(([notes, folders]) => {
            this.setState({notes, folders});
        })
        .catch(error => {
            console.error({error});
        });
  }

  renderFolderRoutes() {
    return(
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={NavFolderList}
          />
        ))}
        <Route path="/note/:noteId" component={FolderContent} />
      </>
    )
  }

  renderNoteRoutes() {
    return(
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={MainNoteList}
          />
        ))}
        <Route path="/note/:noteId" component={NoteContent} />
      </>
    )
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
    }   
    
    return(
      <AppContext.Provider value={value}>
        <div className="app">
          <header className="app-header">
            <h1 className="ap-title">
            <Link to="/">noteful</Link>
            </h1>
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