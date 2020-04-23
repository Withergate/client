import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { Table, Card, Image } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { LARGE, FAME, FACTION_POINTS } from '../../constants/constants';
import { getTranslatedText } from '../../translations/translationUtils';
import { InfoIcon } from '../shared/InfoIcon';

const getTurnsAsString = (turns) => {
    var result = '';
    for (let i = 0; i < turns.length; i++) {
        result += turns[i];
        if (i < turns.length - 1) {
            result += ', ';
        }
    }
    return result;
}

const FactionsOverview = ({overview, turns}) => (
    <div>
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Translate id="factions.clanOverview" /></li>
                        <li className="list-inline-item"><InfoIcon textKey="factions.clanInfo" /></li>
                    </ul>
                </Card.Title>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Translate id="factions.clanPoints" />:
                    </li>
                    <li className="list-inline-item">
                        <GameIcon type={FACTION_POINTS} size={LARGE} value={overview.clanPoints} noPadding />
                    </li>
                </ul>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Translate id="factions.expectedFame" />:
                    </li>
                    <li className="list-inline-item">
                        <GameIcon type={FAME} size={LARGE} value={overview.clanFame} noPadding />
                    </li>
                </ul>
                <p>
                    <b><Translate id="factions.fameTurns" data={{ turns: getTurnsAsString(turns) }}/></b>
                </p>
            </Card.Body>
        </Card>
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Translate id="factions.factionsOverview" /></li>
                        <li className="list-inline-item"><InfoIcon textKey="factions.factionsInfo" /></li>
                    </ul>
                </Card.Title>
                <Table striped borderless hover>
                    <thead>
                        <tr>
                            <th><Translate id="basic.faction" /></th>
                            <th><GameIcon type={FACTION_POINTS} size={LARGE} noPadding /></th>
                            <th><GameIcon type={FAME} size={LARGE} noPadding /></th>
                        </tr>
                    </thead>
                    <tbody>
                        { overview.factions.map(faction =>
                            <tr key={faction.identifier}>
                                <td>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <Image src={faction.iconUrl} width="24px" />
                                        </li>
                                        <li className="list-inline-item">
                                            {getTranslatedText(faction.name)}
                                        </li>
                                    </ul>
                                </td>
                                <td>{faction.points}</td>
                                <td>{faction.fame}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>
        </Card.Body>
    </Card>
    </div>
);

FactionsOverview.propTypes = {
    overview: PropTypes.object.isRequired,
    turns: PropTypes.array.isRequired
};

export default FactionsOverview;