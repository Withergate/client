import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

const Header = ({turn}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><img height="25" src={logo} alt="WITHERGATE" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/clan'>Clan</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/locations'>Locations</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/fame'>Fame</Link></li>
            </ul>
        </div>
        <div className="text-light"><small><b>Turn: </b>{turn.turnId}</small></div>
    </nav>
);

Header.propTypes = {
    turn: PropTypes.object.isRequired
};

export default Header;
