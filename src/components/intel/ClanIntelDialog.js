import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from 'react-localize-redux';
import { Modal, Button, Row, Col } from 'react-bootstrap';

import { displayIntel } from '../../actions/uiActions';
import { GameIcon } from '../shared/GameIcon';
import { FAME, SMALL, CAPS, FOOD, JUNK } from '../../constants/constants';

const ClanIntelDialog = (props) => (
    <Modal show={props.show} centered >
        <Modal.Header>
            <Modal.Title>
                {props.intel.name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col><p><Translate id="intel.description" /></p></Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <li>
                            <GameIcon type={FAME} value={props.intel.fame} size={SMALL} />
                        </li>
                        <li>
                            <GameIcon type={CAPS} value={props.intel.caps ? props.intel.caps : '?'} size={SMALL} />
                        </li>
                        <li>
                            <GameIcon type={FOOD} value={props.intel.food ? props.intel.food : '?'} size={SMALL} />
                        </li>
                        <li>
                            <GameIcon type={JUNK} value={props.intel.junk ? props.intel.junk : '?'} size={SMALL} />
                        </li>
                        <li>
                            <b><Translate id="intel.characters" />:</b> { props.intel.characters ? props.intel.characters : '?' }
                        </li>
                        <li>
                            <b><Translate id="intel.defense" />:</b> { props.intel.defense ? props.intel.defense : '?' }
                        </li>
                        <li>
                            <b><Translate id="intel.buildings" />:</b> { props.intel.buildings ? props.intel.buildings : '?' }
                        </li>
                        <li>
                            <b><Translate id="intel.research" />:</b> { props.intel.research ? props.intel.research : '?' }
                        </li>
                        <li>
                            <b><Translate id="intel.disaster" />:</b> { props.intel.disasterProgress ? props.intel.disasterProgress : '?' }
                        </li>
                    </ul>
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
    show: PropTypes.bool.isRequired,
    intel: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error } = state.data.intel;
    const intel = state.data.intel.data;
    const show = state.ui.displayIntel;

    return { fetching, fetched, failed, error, intel, show };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ displayIntel }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(ClanIntelDialog);