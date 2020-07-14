import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { getTranslatedText } from '../../translations/translationUtils';

const GlobalNotification = (props) => (
    <Card bg="warning">
        <Card.Body>
            {getTranslatedText(props.message)}
            { props.link && props.linkText &&
                <span>
                    <br />
                    <a href={props.link} target="_blank" rel="noopener noreferrer">{props.linkText}</a>
                </span>
            }
        </Card.Body>
    </Card>
);

GlobalNotification.propTypes = {
    message: PropTypes.object.isRequired,
    link: PropTypes.string,
    linkText: PropTypes.string
};

export { GlobalNotification };