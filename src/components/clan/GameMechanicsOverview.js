import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Translate } from "react-localize-redux";
import { Row, Col, Card } from 'react-bootstrap';

const GameMechanicsOverview = ({properties}) => (
    <Card className="mt-4">
        <Card.Body>
            <Card.Title>
                <Translate id="labels.mechanics" />
            </Card.Title>
            <Row>
                <Col>
                    <ul>
                        <li>
                            <Translate id="labels.foodConsumption" data={{ food: properties.foodConsumption }}/>
                        </li>
                        <li>
                            <Translate id="labels.starvation" data={{ health: properties.starvationInjury, fame: properties.starvationFame }}/>
                        </li>
                        <li>
                            <Translate id="labels.construction" data={{ fame: properties.buildingFame }}/>
                        </li>
                    </ul>      
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

GameMechanicsOverview.propTypes = {
    properties: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const properties = state.game.properties;

    return { properties };
};

export default connect(mapStateToProps)(GameMechanicsOverview);