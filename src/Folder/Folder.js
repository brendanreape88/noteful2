import React from 'react'
import Context from 'src/Context.js'

class Folder extends React.Component {
    static contextType = Context

    render() {
        const { name, folderId } = this.context.folder
        return(
            <div className="folder-div">
                <h2>
                    <Link to={`folder/${folderId}`}>
                        {name}
                    </Link>
                </h2>
            </div>
        )
    }
}

export default Folder