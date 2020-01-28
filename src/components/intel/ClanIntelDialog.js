import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from 'react-localize-redux';
import { Modal, Button, Row, Col, ListGroup } from 'react-bootstrap';

import { displayIntel } from '../../actions/uiActions';
import { handleClanCombat } from '../../actions/actionActions';
import { GameIcon } from '../shared/GameIcon';
import { FAME, SMALL, CAPS, FOOD, JUNK } from '../../constants/constants';
import CharacterSelector from '../clan/CharacterSelector';
import ActionButton from '../shared/ActionButton';

// clan must be in a different faction than the other clan
const isAttackEnabled = (clan, intel) => {
    if (!clan.faction) {
        return false;
    }
    if (clan.faction.idenfifier === intel.faction) {
        return false;
    }

    return true;
}

const ClanIntelDialog = (props) => (
    <Modal show={props.show} centered size="xl" >
        <Modal.Header>
            <Modal.Title>
                {props.intel.name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={8} xs={12} className="mb-2">
                    <p><Translate id="intel.description" /></p>
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <GameIcon type={FAME} value={props.intel.fame} size={SMALL} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <GameIcon type={CAPS} value={props.intel.caps ? props.intel.caps : '?'} size={SMALL} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <GameIcon type={FOOD} value={props.intel.food ? props.intel.food : '?'} size={SMALL} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <GameIcon type={JUNK} value={props.intel.junk ? props.intel.junk : '?'} size={SMALL} />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4} xs={12}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <b><Translate id="intel.characters" />:</b> { props.intel.characters ? props.intel.characters : '?' }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b><Translate id="intel.defense" />:</b> { props.intel.defense ? props.intel.defense : '?' }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b><Translate id="intel.buildings" />:</b> { props.intel.buildings ? props.intel.buildings : '?' }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b><Translate id="intel.research" />:</b> { props.intel.research ? props.intel.research : '?' }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b><Translate id="intel.disaster" />:</b> { props.intel.disasterProgress ? props.intel.disasterProgress : '?' }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    {
                        isAttackEnabled(props.clan, props.intel) ?
                        <div>
                            <h5><Translate id="intel.attack" /></h5>
                            <p><Translate id="intel.attackText" /></p>
                            <Row>
                                <Col md={10} xs={12}>
                                    <CharacterSelector />
                                </Col>
                                <Col md={2} xs={12}>
                                    { props.selectedCharacter !== undefined ? 
                                        <ActionButton 
                                            character={props.selectedCharacter}
                                            action={() => props.handleClanCombat(props.selectedCharacter.id, props.intel.clanId)}
                                            buttonText="intel.attack"
                                            tooltip="intel.attackTooltip"
                                            noPadding
                                        />
                                        : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                                    }
                                </Col>
                            </Row>
                        </div>
                        : <p><small><Translate id="intel.attackDisabled" /></small></p>
                    }
                </Col>
            </Row>
            
            
        </Modal.Body>
        <Modal.Footer>
            <Button className="button-classic" variant="outline-dark" onClick={() => props.displayIntel(false)} >
                <Translate id="labels.close" />
            </Button>
        </Modal.Footer>
      </Modal>
);

ClanIntelDialog.propTypes = {
    clan: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    intel: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const clan = state.clan.clan;
    const { fetching, fetched, failed, error } = state.data.intel;
    const intel = state.data.intel.data;
    const show = state.ui.displayIntel;
    const selectedCharacter = state.clan.selectedCharacter;

    return { clan, fetching, fetched, failed, error, intel, show, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ displayIntel, handleClanCombat }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(ClanIntelDialog);