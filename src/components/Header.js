import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Translate } from "react-localize-redux";

import LanguageToggle from './LanguageToggle';
import logo from '../images/logo.png';
import { GameIcon } from './shared/GameIcon';
import { CAPS, SMALL, JUNK, FOOD, FAME } from '../constants/constants';
import { Image } from 'react-bootstrap';
import warningIcon from '../images/warning.png';
import TooltipWrapper from './shared/TooltipWrapper';
import { getTimeToNextTurn } from '../services/timeUtils';

const getTurnText = (turnId, maxTurns) => {
    if (turnId <= maxTurns) {
        return turnId + ' / ' + maxTurns;
    } else {
        return <Translate id="labels.end" />;
    }
}

const renderWarning = (clan) => {
    for (const character of clan.characters) {
        if (character.state === 'READY') {
            return <TooltipWrapper textKey="header.charactersWarning" place="bottom">
                <Image src={warningIcon} width="20px" />
            </TooltipWrapper>
        }
    }
    return undefined;
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
                { loggedIn && <li className="nav-item"><Link className="nav-link" to='/profile'><Translate id="header.profile" /></Link></li> }
                <li className="nav-item"><Link className="nav-link" to='/about'><Translate id="header.about" /></Link></li>
                <li className="nav-item"><a className="nav-link" href='http://withergate.proboards.com/' rel="noopener noreferrer" target='_blank'><Translate id="header.forum" /></a></li>
                { principal && principal.role === 'ADMIN' && <li className="nav-item"><Link className="nav-link text-danger" to='/admin'><Translate id="header.administration" /></Link></li>}
            </ul>
            { loggedIn &&
                <div>
                    <ul className="mt-1 mb-1 p-2 mr-auto list-inline rounded bg-light resource-panel">
                        <li className="list-inline-item"><GameIcon type={CAPS} size={SMALL} value={clan.caps} place="bottom" /></li>
                        <li className="list-inline-item"><GameIcon type={JUNK} size={SMALL} value={clan.junk} place="bottom" /></li>
                        <li className="list-inline-item"><GameIcon type={FOOD} size={SMALL} value={clan.food} place="bottom" /></li>
                        <li className="list-inline-item"><GameIcon type={FAME} size={SMALL} value={clan.fame} place="bottom" /></li>
                        <li className="list-inline-item">
                            <TooltipWrapper textKey="header.timeRemaining" value={getTimeToNextTurn(turn, turnTimes)} place="bottom" >
                                <small className="p-2">
                                    <b><Translate id="header.turn" /></b>: { getTurnText(turn.turnId, maxTurns)}
                                </small>
                            </TooltipWrapper>
                        </li>
                        { turn.turnId <= maxTurns && 
                            <li className="list-inline-item">{renderWarning(clan)}</li> 
                        }
                    </ul>
                </div>
            }
            <div className="ml-md-3 ml-sm-0">
                <LanguageToggle /> 
            </div>
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
