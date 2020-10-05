import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Folder extends React.Component {
  render() {
    const { folder_name, id } = this.props;
    console.log(this.props);
    return (
      <div className="folder-div">
        <h2>
          <Link to={`folders/${id}`}>{folder_name}</Link>
        </h2>
      </div>
    );
  }
}

Folder.propTypes = {
  name: PropTypes.string,
  folderId: PropTypes.number,
};

export default Folder;
