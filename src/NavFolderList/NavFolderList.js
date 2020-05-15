import React from 'react'
import AppContext from '../AppContext'
import Folder from '../Folder/Folder'

class NavFolderList extends React.Component {
    static contextType = AppContext

    render() {
        const folderContext = this.context.folders
        return(
            <div>
                <ul>
                    {folderContext.map(data => 
                        <Folder
                            name={data.name}
                            folderId={data.folderId}
                        />
                    )}
                </ul>
            </div>
        )
    }

}

export default NavFolderList