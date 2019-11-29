import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';
import TooltipWrapper from './TooltipWrapper';

const ActionButton = (props) => (
    <TooltipWrapper textKey={props.tooltip}>
        <Button 
            variant="success"
            className="button-classic ml-2" 
            onClick={props.action}
            disabled={props.condition ? props.condition || props.character.state !== 'READY' : props.character.state !== 'READY'}>
            <Translate id={props.buttonText} />
        </Button>
    </TooltipWrapper>
);

ActionButton.propTypes = {
    character: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    condition: PropTypes.bool
};

export { ActionButton };