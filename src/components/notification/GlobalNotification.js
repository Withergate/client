import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { getTranslatedText } from '../../translations/translationUtils';

const GlobalNotification = (props) => (
    <Card className="m-4" bg="warning">
        <Card.Body>
            {getTranslatedText(props.message)}
        </Card.Body>
    </Card>
);

GlobalNotification.propTypes = {
    message: PropTypes.string.isRequired
};

export { GlobalNotification };