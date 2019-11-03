import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, ProgressBar, Card, Image } from 'react-bootstrap';

const ResearchListItem = ({research, selectedCharacter, doResearch, actionable}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(research.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image rounded src={research.details.imageUrl} height="120px" />
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
                    <Button 
                        variant="success"
                        className="button-classic" 
                        disabled={selectedCharacter.state !== 'READY'}
                        onClick={() => doResearch(research.details.identifier, selectedCharacter.id)}>
                        <Translate id="labels.research" />
                    </Button> 
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