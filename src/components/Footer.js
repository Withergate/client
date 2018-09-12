import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({version}) => (
    <div className="w-80 m-4"><small className="float-right text-muted">{version}</small></div>
);

Footer.propTypes = {
    version: PropTypes.string.isRequired
};

export default Footer;
