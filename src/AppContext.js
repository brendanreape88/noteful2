import React from "react";

const AppContext = React.createContext({
  notes: [],
  folders: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},
  deleteFolder: () => {},
});

export default AppContext;
