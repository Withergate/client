import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

const Error = (props) => (
    <Card className="m-4" bg="danger" text="white">
        <Card.Body>
            {props.message}
        </Card.Body>
        <Card.Footer>
            <Button variant="outline-light" onClick={() => props.dismiss()}>Dismiss</Button>
        </Card.Footer>
    </Card>
);

Error.propTypes = {
    message: PropTypes.string.isRequired,
    dismiss: PropTypes.func.isRequired
};

export { Error };