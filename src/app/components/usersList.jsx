import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UsersList = ({ id, name }) => {
    return (
        <>
            <Link key={id} to={`/user/${id}`}>
                <>{name}</>
            </Link>
        </>
    );
};
UsersList.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default UsersList;
