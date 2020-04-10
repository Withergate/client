import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { getTranslatedText } from '../../translations/translationUtils';

const GlobalNotification = (props) => (
    <Card bg="warning">
        <Card.Body>
            {getTranslatedText(props.message)}
        </Card.Body>
    </Card>
);

GlobalNotification.propTypes = {
    message: PropTypes.object.isRequired
};

export { GlobalNotification };