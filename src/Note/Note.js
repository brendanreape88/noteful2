import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Note extends React.Component {

    render() {
        const { name, id } = this.props

        return(
            <div className="note-div">
                <h3>
                    <Link to={`/note/${id}`}>
                        {name}
                    </Link>
                </h3>
            </div>
        )
    }
}

Note.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string
}

export default Note