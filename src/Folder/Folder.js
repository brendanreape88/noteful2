import React from 'react'
import { Link } from 'react-router-dom'

class Folder extends React.Component {

    render() {
        const { name, folderId } = this.props
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