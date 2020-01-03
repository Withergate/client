import React from 'react';
import PropTypes from 'prop-types';

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card, Image } from 'react-bootstrap';


const FactionDescription = ({faction}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Image src={faction.iconUrl} width="32px" />
                </li>
                <li className="list-inline-item">
                    {getTranslatedText(faction.name)}
                </li> 

                </ul>
            </Card.Title>
            <Row>
                <Col md={4} className="mb-2">
                    <Image rounded src={faction.imageUrl} className="w-100" />
                </Col>
                <Col md={8}>
                    <Row>
                        {getTranslatedText(faction.description)}
                    </Row>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

FactionDescription.propTypes = {
    faction: PropTypes.object.isRequired
};

export default FactionDescription;