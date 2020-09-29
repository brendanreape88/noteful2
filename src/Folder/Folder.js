import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Folder extends React.Component {
  render() {
    const { name, folderId } = this.props;
    return (
      <div className="folder-div">
        <h2>
          <Link to={`folder/${folderId}`}>{name}</Link>
        </h2>
      </div>
    );
  }
}

Folder.propTypes = {
  name: PropTypes.string,
  folderId: PropTypes.string,
};

export default Folder;
