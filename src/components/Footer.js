import React from 'react';
import PropTypes from 'prop-types';

import { version as clientVersion }  from '../../package.json';


const Footer = ({version}) => (
    <div className="w-80 m-4 mt-4"><small className="float-right text-muted">api: {version} / client: {clientVersion}</small></div>
);

Footer.propTypes = {
    version: PropTypes.string.isRequired
};

export default Footer;
