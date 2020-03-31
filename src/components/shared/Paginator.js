import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Button } from 'react-bootstrap';

const Paginator = (props) => (
    <div>
        <Button 
            variant="light"
            size="sm"
            className="button-small d-inline"
            disabled={props.number <= props.min}
            onClick={() => props.onPrevious(props.number - 1)}>
            <Translate id="labels.previous" />
        </Button>
        <div className="align-self-center d-inline ml-4 mr-4">
            { props.children } / { props.total ? props.total : props.max + 1 }
        </div>
        <Button 
            variant="light"
            size="sm"
            className="button-small d-inline"
            disabled={props.number >= props.max}
            onClick={() => props.onNext(props.number + 1)}>
            <Translate id="labels.next" />
        </Button>
    </div>
);

Paginator.propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
    number: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    total: PropTypes.number
};

export { Paginator };