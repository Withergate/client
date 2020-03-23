import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Row, Col, Card, Button } from 'react-bootstrap';

import { activateTrait, forgetTrait } from '../../actions/actionActions';
import ActionButton from '../shared/ActionButton';
import TraitItem from './TraitItem';
import { GameIcon } from '../shared/GameIcon';
import { CAPS, SMALL } from '../../constants/constants';

class TraitPanel extends React.Component {
    render() {
        return ( 
            <div>
                <Card className="mb-4">
                    <Card.Body>
                        <Row>
                            <Col md={12}>
                                <p><Translate id="base.trainingDescription" /></p>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        { this.props.selectedCharacter !== undefined ?
                            this.props.selectedCharacter.skillPoints > 0 ?
                                this.props.selectedCharacter.traits.filter(trait => !trait.active).map(trait =>
                                    <Row className="mb-2 ml-1" key={trait.id}>
                                        <Col md={1} xs={4}>
                                            <TraitItem trait={trait} />
                                        </Col>
                                        <Col md={8} xs={8}>
                                            <Row>
                                                <ActionButton
                                                    character={this.props.selectedCharacter}
                                                    action={() => this.props.activateTrait(this.props.selectedCharacter.id, trait.details.identifier, false)}
                                                    buttonText="base.train"
                                                    tooltip="base.trainTooltip" />
                                                <Button
                                                    className="ml-2 mb-2"
                                                    variant="outline-success"
                                                    onClick={() => this.props.activateTrait(this.props.selectedCharacter.id, trait.details.identifier, true)}>
                                                    <div className="inline">
                                                        <Translate id="base.trainNow" />
                                                        <GameIcon type={CAPS} size={SMALL} value={this.props.trainingPrice} />
                                                    </div>
                                                </Button>
                                                <Button
                                                    className="ml-2 mb-2"
                                                    variant="outline-warning"
                                                    onClick={() => this.props.forgetTrait(this.props.selectedCharacter.id, trait.details.identifier)}>
                                                    <div className="inline">
                                                        <Translate id="base.forget" />
                                                        <GameIcon type={CAPS} size={SMALL} value={this.props.traitForgetPrice} />
                                                    </div>
                                                </Button>
                                            </Row>
                                        </Col>
                                    </Row>  
                                )
                                : <small className="text-muted"><Translate id="base.noSkillpoints" /></small>
                            : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                        }
                    </Card.Footer>
                </Card>
            </div>
        )
    }
};

TraitPanel.propTypes = {
    selectedCharacter: PropTypes.object,
    clan: PropTypes.object.isRequired,
    trainingPrice: PropTypes.number.isRequired,
    traitForgetPrice: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;
    const clan = state.clan.clan;
    const trainingPrice = state.game.properties.trainingPrice;
    const traitForgetPrice = state.game.properties.traitForgetPrice;

    return { selectedCharacter, clan, trainingPrice, traitForgetPrice };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        activateTrait,
        forgetTrait
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TraitPanel);