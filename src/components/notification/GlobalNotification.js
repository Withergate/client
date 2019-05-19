import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const GlobalNotification = (props) => (
    <Card className="m-4" bg="warning">
        <Card.Body>
            {props.message}
        </Card.Body>
    </Card>
);

GlobalNotification.propTypes = {
    message: PropTypes.string.isRequired
};

export { GlobalNotification };