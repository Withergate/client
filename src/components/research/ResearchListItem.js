import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, ProgressBar, Card, Image } from 'react-bootstrap';
import { ActionButton } from '../shared/ActionButton';

const ResearchListItem = ({research, selectedCharacter, doResearch, actionable}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(research.details.name)}
            </Card.Title>
            <Row>
                <Col md={4} className="mb-2">
                    <Image rounded src={research.details.imageUrl} className="w-100" />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col>
                            <p>
                                {getTranslatedText(research.details.description)}
                            </p>
                            <p>
                                <small>{getTranslatedText(research.details.info)}</small>
                            </p>
                        </Col>
                    </Row>
                    { actionable &&
                        <Row className="mt-2">
                            <Col>
                                <ProgressBar 
                                    min={0}
                                    max={research.details.cost}
                                    now={research.progress}
                                    label={`${research.progress}/${research.details.cost}`} />
                            </Col>
                        </Row>
                    }
                </Col>
            </Row>
        </Card.Body>
        { actionable &&
            <Card.Footer>
                { selectedCharacter !== undefined ?
                    <Row>
                        <ActionButton
                            character={selectedCharacter}
                            action={() => doResearch(research.details.identifier, selectedCharacter.id)}
                            buttonText="labels.research"
                            tooltip="research.tooltip" />
                    </Row>
                    : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                }
            </Card.Footer>
        }
    </Card>
);

ResearchListItem.propTypes = {
    research: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    doResearch: PropTypes.func.isRequired,
    actionable: PropTypes.bool.isRequired
};

export default ResearchListItem;