import React from 'react';
import PropTypes from 'prop-types';

import { version as clientVersion }  from '../../package.json';
import { Translate } from 'react-localize-redux';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = ({version, fetched}) => (
     fetched && 
     <div className="footer p-4 text-muted">
        <ul className="footer-content list-inline">
            <li className="list-inline-item"><small>api: {version} / client: {clientVersion}</small></li>
            <Link to="/premium">
                <Badge pill variant="warning"><Translate id="about.premium" /></Badge>
            </Link>
        </ul>
    </div>
);

Footer.propTypes = {
    version: PropTypes.string.isRequired,
    fetched: PropTypes.bool.isRequired
};

export default Footer;
