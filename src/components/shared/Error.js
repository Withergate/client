import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { getTranslatedText } from '../../translations/translationUtils';
import { Translate } from 'react-localize-redux';

const Error = (props) => (
    <Card className="m-4" bg="danger" text="white">
        <Card.Body>
            {
                props.error.localizedText ?
                    getTranslatedText(props.error.localizedText)
                    : props.error.message

            }
        </Card.Body>
        <Card.Footer>
            <Button variant="outline-light" onClick={() => props.dismiss()}><Translate id="labels.close" /></Button>
        </Card.Footer>
    </Card>
);

Error.propTypes = {
    error: PropTypes.object.isRequired,
    dismiss: PropTypes.func.isRequired
};

export { Error };