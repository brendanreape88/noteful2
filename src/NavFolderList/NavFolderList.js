import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import AppContext from '../AppContext'
import Folder from '../Folder/Folder'

class NavFolderList extends React.Component {
    static contextType = AppContext

    render() {
        const { folders=[], notes=[] } = this.context
        return(
            <div>
                <ul>
                    {folders.map(folder => 
                        <li key={folder.id}>
                            <NavLink to={`/folders/${folder.id}`}>
                                {folder.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        )
    }

}

export default NavFolderList