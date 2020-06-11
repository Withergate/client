import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import { GOLD } from '../../constants/constants';
import { checkPremium } from '../profile/premiumUtils';

const CharacterActionButton = ({pendingAction, character, selectCharacter, cancelAction, profile}) => (
    pendingAction ?
        <div>
            <Row>
                <Col><small><Translate id={"actions." + pendingAction.descriptor} /></small></Col>
            </Row>
            <Row className="mt-2">
                {
                    checkPremium(profile.premiumType, GOLD) && pendingAction.cancellable &&
                    <Col>
                        <Button
                            className="w-100"
                            size="sm"
                            variant="outline-danger"
                            onClick={() => cancelAction(character.id)}>
                            <Translate id="labels.cancel" />
                        </Button>
                    </Col>
                }
            </Row>
            
        </div>
        : <Link to="/action">
            <Button
                className="w-100"
                size="sm"
                variant="outline-success"
                disabled={character.state !== "READY"}
                onClick={() => selectCharacter(character.id)}>
                <Translate id="labels.actions" />
            </Button>
        </Link>
);

CharacterActionButton.propTypes = {
    pendngAction: PropTypes.object,
    character: PropTypes.object.isRequired,
    selectCharacter: PropTypes.func.isRequired,
    cancelAction: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

export default CharacterActionButton;