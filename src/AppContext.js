import React from 'react'

const AppContext = React.createContext({

    notes: [
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
      ]

})

export default AppContext