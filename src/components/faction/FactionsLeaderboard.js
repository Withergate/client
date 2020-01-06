import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { Table, Card } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { LARGE, FAME, FACTION_POINTS } from '../../constants/constants';

const FactionsLeaderboard = ({clans}) => (
    <Card>
        <Card.Body>
            <Card.Title><Translate id="factions.leaderboard" /></Card.Title>
            <Table striped borderless hover>
                <thead>
                    <tr>
                        <th><Translate id="basic.clan" /></th>
                        <th><GameIcon type={FACTION_POINTS} size={LARGE} noPadding /></th>
                        <th><GameIcon type={FAME} size={LARGE} noPadding /></th>
                    </tr>
                </thead>
                <tbody>
                    { clans.map(clan =>
                        <tr key={clan.name}>
                            <td>{clan.name}</td>
                            <td>{clan.points}</td>
                            <td>{clan.fame}</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </Card.Body>
    </Card>
    
);

FactionsLeaderboard.propTypes = {
    clans: PropTypes.array.isRequired
};

export default FactionsLeaderboard;