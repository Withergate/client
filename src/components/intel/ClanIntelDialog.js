import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from 'react-localize-redux';
import { Modal, Button, Row, Col, ListGroup } from 'react-bootstrap';

import { displayClanIntel, dismissError } from '../../actions/uiActions';
import { handleClanCombat } from '../../actions/actionActions';
import { GameIcon } from '../shared/GameIcon';
import { FAME, SMALL, CAPS, FOOD, JUNK, LARGE, FACTION_POINTS } from '../../constants/constants';
import CharacterSelector from '../clan/CharacterSelector';
import ActionButton from '../shared/ActionButton';
import { Error } from '../shared/Error';
import DefenderDetail from '../clan/DefenderDetail';

// clan must be in a different faction than the other clan
const isAttackEnabled = (clan, intel) => {
    if (!clan.faction || !intel.faction) {
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
            { props.failed && props.error && <Error error={props.error} dismiss={props.dismissError} />
            }
            <Row>
                <Col md={8} xs={12} className="mb-2">
                    <p><Translate id="intel.description" /></p>
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <GameIcon type={FAME} value={props.intel.fame} size={SMALL} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <GameIcon type={CAPS} value={props.intel.caps !== null ? props.intel.caps : '?'} size={SMALL} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <GameIcon type={FOOD} value={props.intel.food !== null ? props.intel.food : '?'} size={SMALL} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <GameIcon type={JUNK} value={props.intel.junk !== null ? props.intel.junk : '?'} size={SMALL} />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4} xs={12}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <b><Translate id="intel.characters" />:</b> { props.intel.characters !== null ? props.intel.characters : '?' }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b><Translate id="intel.buildings" />:</b> { props.intel.buildings !== null ? props.intel.buildings : '?' }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b><Translate id="intel.research" />:</b> { props.intel.research !== null ? props.intel.research : '?' }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b><Translate id="intel.disaster" />:</b> { props.intel.disasterProgress !== null ? props.intel.disasterProgress : '?' }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h5><Translate id="intel.attack" /></h5>
                    { props.intel.defender ?
                        <div className="mb-2">
                            <b><Translate id="intel.defender" />: </b>{props.intel.defender.name}
                            <DefenderDetail defender={props.intel.defender} />
                        </div>
                        : <b className="text-danger"><Translate id="intel.defenseUnknown" /></b>
                    }
                    {
                        isAttackEnabled(props.clan, props.intel) ?
                        <div>
                            <p><Translate id="intel.attackText" /></p>
                            <p className="text-danger"><Translate id="intel.attackLimit" /></p>
                            <Row className="mb-4">
                                <Col md={8} xs={12} className="mb-4">
                                    
                                </Col>
                                <Col md={4} xs={12}>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><b><Translate id="basic.reward" />: </b></li>
                                        <li className="list-inline-item"><GameIcon type={FAME} size={LARGE} value={props.intel.fameReward} /></li>
                                        <li className="list-inline-item"><GameIcon type={FACTION_POINTS} size={LARGE} value={props.intel.factionReward} /></li>
                                        <li className="list-inline-item"><GameIcon type={CAPS} value='?' size={LARGE} /></li>
                                        <li className="list-inline-item"><GameIcon type={FOOD} value='?' size={LARGE} /></li>
                                        <li className="list-inline-item"><GameIcon type={JUNK} value='?' size={LARGE} /></li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={10} xs={12}>
                                    <CharacterSelector />
                                </Col>
                                <Col md={2} xs={12}>
                                    { props.selectedCharacter !== undefined ? 
                                        <ActionButton 
                                            character={props.selectedCharacter}
                                            action={() => {
                                                props.handleClanCombat(props.selectedCharacter.id, props.intel.clanId)
                                            }}
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
            <Button className="button-classic" variant="outline-dark" onClick={() => props.displayClanIntel(false)} >
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
    const fetched = state.action.fetched && state.data.clanIntel.fetched;
    const fetching = state.action.fetching || state.data.clanIntel.fetching;
    const failed = state.action.failed || state.data.clanIntel.failed;
    const error = state.action.error || state.data.clanIntel.error;
    const intel = state.data.clanIntel.data;
    const show = state.ui.displayClanIntel;
    const selectedCharacter = state.clan.selectedCharacter;

    return { clan, fetching, fetched, failed, error, intel, show, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ displayClanIntel, handleClanCombat, dismissError }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(ClanIntelDialog);