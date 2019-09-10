import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { RESTING } from '../../constants/constants';

const ActionButton = ({pendingAction, character, selectCharacter}) => (
    pendingAction ?
        <small><Translate id={"actions." + pendingAction.descriptor} /></small>
        : character.state === RESTING ?
            <small><Translate id="actions.RESTING" /></small>
            : <Link to="/action">
                <Button
                    className="w-100"
                    size="sm"
                    variant="outline-dark"
                    disabled={character.state !== "READY"}
                    onClick={() => selectCharacter(character.id)}>
                    <Translate id="labels.actions" />
                </Button>
            </Link>
);

ActionButton.propTypes = {
    pendngAction: PropTypes.object,
    character: PropTypes.object.isRequired,
    selectCharacter: PropTypes.func.isRequired
};

export default ActionButton;