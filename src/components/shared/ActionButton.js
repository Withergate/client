import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';
import TooltipWrapper from './TooltipWrapper';

const disableButton = (condition, character, turn, maxTurns) => {
    const disableCondition = condition ? condition : false;
    const disableCharacter = character.state !== 'READY';
    const disableTurn = turn.turnId > maxTurns;
    return disableCondition || disableCharacter || disableTurn;
}

const ActionButton = (props) => (
    <TooltipWrapper textKey={props.tooltip}>
        <Button
            variant="success"
            className={props.noPadding ? "button-classic" : "button-classic ml-2"} 
            onClick={props.action}
            disabled={disableButton(props.condition, props.character, props.turn, props.maxTurns)}>
            <Translate id={props.buttonText} />
        </Button>
    </TooltipWrapper>
);

ActionButton.propTypes = {
    character: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    maxTurns: PropTypes.number.isRequired,
    turn: PropTypes.object.isRequired,
    condition: PropTypes.bool,
    noPadding: PropTypes.bool
};

const mapStateToProps = state => {
    const turn = state.turn.turn;
    const maxTurns = state.game.properties.maxTurns;

    return { turn, maxTurns };
};

export default connect(mapStateToProps)(ActionButton);