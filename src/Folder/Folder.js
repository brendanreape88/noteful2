import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Folder extends React.Component {
  render() {
    const { folder_name, id } = this.props;
    return (
      <div className="folder-div">
        <h2>
          <Link to={`folder/${id}`}>{folder_name}</Link>
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
