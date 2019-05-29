import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Translate } from "react-localize-redux";

import LanguageToggle from './LanguageToggle';
import logo from '../images/logo.png';
import refresh from '../images/refresh.png';
import { GameIcon } from './shared/GameIcon';
import { CAPS, SMALL, JUNK, FOOD, FAME } from '../constants/constants';
import { Row } from 'react-bootstrap';

const Header = ({turn, principal, clan, loggedIn}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><img height="25" src={logo} alt="WITHERGATE" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                { loggedIn && <li className="nav-item"><Link className="nav-link" to='/'><Translate id="header.news" /></Link></li> }
                { loggedIn && <li className="nav-item"><Link className="nav-link" to='/clan'><Translate id="header.clan" /></Link></li> }
                { loggedIn && <li className="nav-item"><Link className="nav-link" to='/action'><Translate id="header.actions" /></Link></li> }
                { loggedIn && <li className="nav-item"><Link className="nav-link" to='/fame'><Translate id="header.fame" /></Link></li> }
                { loggedIn && <li className="nav-item"><Link className="nav-link" to='/about'><Translate id="header.about" /></Link></li> }
                <li className="nav-item"><a className="nav-link" href='http://withergate.proboards.com/'  rel="noopener noreferrer" target='_blank'><Translate id="header.forum" /></a></li>
                { principal && principal.role === 'ADMIN' && <li className="nav-item"><Link className="nav-link text-danger" to='/admin'><Translate id="header.administration" /></Link></li>}
            </ul>
        </div>
        { loggedIn &&
            <Row className="mr-2 mr-2 p-2 rounded bg-light">
                <GameIcon type={CAPS} size={SMALL} value={clan.caps} />
                <GameIcon type={JUNK} size={SMALL} value={clan.junk} />
                <GameIcon type={FOOD} size={SMALL} value={clan.food} />
                <GameIcon type={FAME} size={SMALL} value={clan.fame} />
            </Row>
        }
        { loggedIn && <div className="mr-2 mr-2 p-2 rounded bg-light"><small><b><Translate id="header.turn" /></b>: {turn.turnId}</small></div> }
        <div className="ml-2" value="Refresh Page" onClick={() => window.location.reload(true)}>
            <img height="20" src={refresh} alt="Refresh" />
        </div>
        <LanguageToggle/>
    </nav>
);

Header.propTypes = {
    turn: PropTypes.object.isRequired,
    clan: PropTypes.object.isRequired,
    principal: PropTypes.object,
    loggedIn: PropTypes.bool.isRequired
};

export default Header;
