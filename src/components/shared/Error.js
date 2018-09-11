import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => (
    <div className="alert alert-danger p-2 m-4" role="alert">
        <p className="ml-3 mt-3">{props.message}</p>
    </div>
);

Error.propTypes = {
    message: PropTypes.string.isRequired
};

export { Error };