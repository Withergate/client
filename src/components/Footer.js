import React from 'react';
import PropTypes from 'prop-types';

import { version as clientVersion }  from '../../package.json';
import { Translate } from 'react-localize-redux';
import { Badge } from 'react-bootstrap';


const Footer = ({version, fetched}) => (
     fetched && 
     <div className="footer w-80 m-4 mt-4 float-right text-muted">
        <ul className="list-inline">
            <li className="list-inline-item"><small>api: {version} / client: {clientVersion}</small></li>
            <a className="ml-2" href="https://www.patreon.com/bePatron?u=19133190" data-patreon-widget-type="become-patron-button">
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
