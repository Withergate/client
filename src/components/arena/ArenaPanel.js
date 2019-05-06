import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { Row, Col, Button, Card } from 'react-bootstrap';

const ArenaPanel = ({selectedCharacter, onVisit}) => (
    <Card className="mb-4">
        <Card.Body>
            <Row>
                <Col md={12}>
                    <p><Translate id="arena.description" /></p>
                    <p><small><Translate id="arena.info" /></small></p>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Row>
                    <Button
                        variant="dark"
                        className="m-2 button-classic" 
                        onClick={() => onVisit(selectedCharacter.id)}
                        disabled={selectedCharacter.state !== 'READY'}>
                        <Translate id="labels.visit" />
                    </Button>
                </Row>
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

ArenaPanel.propTypes = {
    selectedCharacter: PropTypes.object,
    onVisit: PropTypes.func.isRequired
};

export default ArenaPanel;