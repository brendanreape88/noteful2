import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import AppContext from '../AppContext'

class NavFolderList extends React.Component {
    static contextType = AppContext

    render() {
        const { folders=[], notes=[] } = this.context
        return(
            <div>
                <ul>
                    {folders.map(folder => 
                        <li key={folder.id}>
                            <NavLink to={`/folder/${folder.id}`}>
                                {folder.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <button>
                    <Link to='/add-folder'>
                        + add folder
                    </Link>
                </button>
            </div>
        )
    }

}


export default NavFolderList