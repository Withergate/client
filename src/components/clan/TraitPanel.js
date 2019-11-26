import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Row, Col, Card } from 'react-bootstrap';

import { activateTrait } from '../../actions/actionActions';
import { ActionButton } from '../shared/ActionButton';
import TraitItem from './TraitItem';

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
                                    <Row className="mb-2 ml-1">
                                        <TraitItem trait={trait} />
                                        <ActionButton
                                            character={this.props.selectedCharacter}
                                            action={() => this.props.activateTrait(this.props.selectedCharacter.id, trait.details.identifier)}
                                            buttonText="base.train"
                                            tooltip="base.trainTooltip" />
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
    clan: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;
    const clan = state.clan.clan;

    return { selectedCharacter, clan };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        activateTrait
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TraitPanel);