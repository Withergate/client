import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Translate } from "react-localize-redux";

import LanguageToggle from './LanguageToggle';
import logo from '../images/logo.png';
import refresh from '../images/refresh.png';
import capsIcon from '../images/caps.png';
import junkIcon from '../images/junk.png';
import foodIcon from '../images/food.png';
import fameIcon from '../images/fame.png';

const Header = ({turn, userRole, clan}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><img height="25" src={logo} alt="WITHERGATE" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to='/'><Translate id="header.news" /></Link></li>
                <li className="nav-item"><Link className="nav-link" to='/clan'><Translate id="header.clan" /></Link></li>
                <li className="nav-item"><Link className="nav-link" to='/locations'><Translate id="header.locations" /></Link></li>
                <li className="nav-item"><Link className="nav-link" to='/fame'><Translate id="header.fame" /></Link></li>
                { userRole === 'ADMIN' && <li className="nav-item"><Link className="nav-link" to='/admin'><Translate id="header.administration" /></Link></li>}
            </ul>
        </div>
        <div className="mr-2 mr-2 p-2 rounded bg-light">
            <img className="ml-1 mr-1" height="15" src={capsIcon} alt="C" /><small>{clan.caps}</small>
            <img className="ml-2 mr-1" height="15" src={junkIcon} alt="J" /><small>{clan.junk}</small>
            <img className="ml-2 mr-1" height="15" src={foodIcon} alt="J" /><small>{clan.food}</small>
            <img className="ml-2 mr-1" height="15" src={fameIcon} alt="F" /><small>{clan.fame}</small>
        </div>
        <div className="mr-2 mr-2 p-2 rounded bg-light"><small><b><Translate id="header.turn" /></b>: {turn.turnId}</small></div>
        <div className="ml-2" value="Refresh Page" onClick={() => window.location.reload(true)}>
            <img height="20" src={refresh} alt="Refresh" />
        </div>
        <LanguageToggle/>
    </nav>
);

Header.propTypes = {
    turn: PropTypes.object.isRequired,
    clan: PropTypes.object.isRequired,
    userRole: PropTypes.string
};

export default Header;
