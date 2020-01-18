import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { Row, Card } from 'react-bootstrap';
import ActionButton from '../shared/ActionButton';
import FactionDescription from './FactionDescription';


const FactionListItem = ({faction, selectedCharacter, joinFaction }) => (
    <Card className="mb-4">
        <FactionDescription faction={faction} />
        <Card.Footer>
            { selectedCharacter !== undefined ?
                <Row>
                    <ActionButton
                        character={selectedCharacter}
                        action={() => joinFaction()}
                        buttonText="factions.join"
                        tooltip="factions.joinTooltip" />
                </Row>
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

FactionListItem.propTypes = {
    faction: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    joinFaction: PropTypes.func.isRequired
};

export default FactionListItem;