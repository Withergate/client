import React from 'react';
import PropTypes from 'prop-types';

import { version as clientVersion }  from '../../package.json';
import { Translate } from 'react-localize-redux';
import { Badge } from 'react-bootstrap';


const Footer = ({version, fetched}) => (
     fetched && 
     <div className="footer p-4 text-muted">
        <ul className="footer-content list-inline">
            <li className="list-inline-item"><small>api: {version} / client: {clientVersion}</small></li>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/bePatron?u=19133190" data-patreon-widget-type="become-patron-button">
                <Badge pill variant="warning"><Translate id="footer.patreon" /></Badge>
            </a>
        </ul>
    </div>
);

Footer.propTypes = {
    version: PropTypes.string.isRequired,
    fetched: PropTypes.bool.isRequired
};

export default Footer;
