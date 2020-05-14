import React, {Component} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Context from './Context';
import MainNoteList from './MainNoteList/MainNoteList'
import NavFolderList from './NavFolderList/NavFolderList'

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  renderMainRoutes() {
    return(
      <>
        <Route exact path="/" component={NavFolderList} />
        <Route exact path="/" component={MainNoteList} />
      </>
    )
  }

  renderDynamicFolderRoutes() {
    return(
      <>
        <Route path="" component={NavFolderList} />
        <Route path="" component={MainNoteList} />
      </>
    )
  }

  renderDynamicNoteRoutes() {
    return(
      <>
        <Route path="" component={NavFolderList} />
        <Route path="" component={MainNoteList} />
      </>
    )
  }

  render() {

    return(
      <Context.Provider>
        <div className="app">
          <header className="app-header">
            <h1 className="ap-title">noteful</h1>
          </header>
          <main className="main">
            <div class="sidebar">
              {this.renderMainRoutes}
            </div>
            <div className="main-content">
              {this.renderMainRoutes}
            </div>
          </main>
        </div>
      </Context.Provider>
    )
  }
}

export default App;