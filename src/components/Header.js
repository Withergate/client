import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Translate } from "react-localize-redux";

import LanguageToggle from './LanguageToggle';
import logo from '../images/logo.png';
import { GameIcon } from './shared/GameIcon';
import { CAPS, SMALL, JUNK, FOOD, FAME } from '../constants/constants';
import { Button } from 'react-bootstrap';
import { AUTH_URL } from '../services/constants/endpoints';
import TooltipWrapper from './shared/TooltipWrapper';

const getTurnText = (turnId, maxTurns) => {
    if (turnId <= maxTurns) {
        return turnId + ' / ' + maxTurns;
    } else {
        return <Translate id="labels.end" />;
    }
}

const getTimeToNextTurn = (turnTimes) => {
    const date = new Date();
    const utcHours = date.getUTCHours();

    var hours = 0;
    var minutes = 0;

    var times = turnTimes.split(",");
    times.push(Number(times[0]) + 24);

    for (let i = 0; i < times.length; i++) {
        if (utcHours < Number(times[i])) {
            hours = Number(times[i]) - utcHours - 1;
            break;
        }
    }

    minutes = 60 - date.getMinutes()

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return hours + ":" + minutes;
}

const logout = () => {
    // delete token
    localStorage.removeItem('token');

    // redirect to auth logout
    window.location = AUTH_URL + "logout"
}

const Header = ({turn, maxTurns, turnTimes, principal, clan, loggedIn}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><img height="25" src={logo} alt="WITHERGATE" /></a>
        <button className="navbar-toggler m-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            { loggedIn &&
                <div>
                    <ul className="m-1 p-2 mr-auto list-inline rounded bg-light">
                        <li className="list-inline-item"><GameIcon type={CAPS} size={SMALL} value={clan.caps} /></li>
                        <li className="list-inline-item"><GameIcon type={JUNK} size={SMALL} value={clan.junk} /></li>
                        <li className="list-inline-item"><GameIcon type={FOOD} size={SMALL} value={clan.food} /></li>
                        <li className="list-inline-item"><GameIcon type={FAME} size={SMALL} value={clan.fame} /></li>
                        <li className="list-inline-item">
                            <TooltipWrapper textKey="header.timeRemaining" value={getTimeToNextTurn(turnTimes)} >
                                <small className="p-2">
                                    <b><Translate id="header.turn" /></b>: { getTurnText(turn.turnId, maxTurns)}
                                </small>
                            </TooltipWrapper>
                        </li>
                    </ul>
                </div>
            }
        </div>
        <div className="ml-4">
            <LanguageToggle />
            {
                loggedIn &&
                <Button onClick={logout} variant="dark" size="sm" className="mt-1">
                    <GameIcon type="LOGOUT" size={SMALL} />
                </Button>
            }   
        </div>
    </nav>
);

Header.propTypes = {
    turn: PropTypes.object.isRequired,
    maxTurns: PropTypes.number.isRequired,
    turnTimes: PropTypes.string.isRequired,
    clan: PropTypes.object.isRequired,
    principal: PropTypes.object,
    loggedIn: PropTypes.bool.isRequired
};

export default Header;
