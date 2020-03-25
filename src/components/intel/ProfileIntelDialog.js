import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from 'react-localize-redux';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';

import { getTranslatedText } from '../../translations/translationUtils';
import { displayProfileIntel, dismissError } from '../../actions/uiActions';
import { Error } from '../shared/Error';
import ReactTooltip from 'react-tooltip';

const ProfileIntelDialog = (props) => (
    <Modal show={props.show} centered >
        <Modal.Header>
            <Modal.Title>
                {props.intel.name}
            </Modal.Title>
        </Modal.Header>
        { props.failed && props.error && <Error message={props.error} dismiss={props.dismissError} /> }
        { props.fetched && 
            <Modal.Body>
                <Row className="mb-4">
                    <Col>
                        <h5><Translate id="intel.extraAchievements" /></h5>
                        { props.intel.extraAchievements.length < 1 && <Translate id="profile.noAchievements" /> }
                        <Row>
                        { props.intel.extraAchievements.map(details =>
                            <Col md={3} xs={4} key={details.identifier} data-tip data-for={details.identifier}>
                                <Image src={details.imageUrl} width="80px"></Image>
                                           
                                <ReactTooltip id={details.identifier} effect="solid" className="tooltip-multiline">
                                    <Row><Col><b>{getTranslatedText(details.name)}</b></Col></Row>
                                     <Row><Col>{getTranslatedText(details.description)}</Col></Row>
                                </ReactTooltip>
                            </Col>
                        )}
                        </Row>
                    </Col>  
                </Row>
                <Row>
                    <Col>
                        <h5><Translate id="intel.missingAchievements" /></h5>
                        { props.intel.missingAchievements.length < 1 && <Translate id="profile.noAchievements" /> }
                        <Row>
                        { props.intel.missingAchievements.map(details =>
                            <Col md={3} xs={4} key={details.identifier} data-tip data-for={details.identifier}>
                                <Image src={details.imageUrl} width="80px"></Image>
                                           
                                <ReactTooltip id={details.identifier} effect="solid" className="tooltip-multiline">
                                    <Row><Col><b>{getTranslatedText(details.name)}</b></Col></Row>
                                     <Row><Col>{getTranslatedText(details.description)}</Col></Row>
                                </ReactTooltip>
                            </Col>
                        )}
                        </Row>
                    </Col>  
                </Row>
            </Modal.Body>
        }
        <Modal.Footer>
            <Button className="button-classic" variant="outline-dark" onClick={() => props.displayProfileIntel(false)} >
                <Translate id="labels.close" />
            </Button>
        </Modal.Footer>
      </Modal>
);

ProfileIntelDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    intel: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const fetched = state.action.fetched && state.data.profileIntel.fetched;
    const fetching = state.action.fetching || state.data.profileIntel.fetching;
    const failed = state.action.failed || state.data.profileIntel.failed;
    const error = state.action.error || state.data.profileIntel.error;
    const intel = state.data.profileIntel.data;
    const show = state.ui.displayProfileIntel;

    return { fetching, fetched, failed, error, intel, show };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ displayProfileIntel, dismissError }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfileIntelDialog);