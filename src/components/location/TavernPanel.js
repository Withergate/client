import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Card, ToggleButtonGroup, ToggleButton, Image } from 'react-bootstrap';

import caps from '../../images/caps.png';
import { VETERAN, ROOKIE } from '../../constants/constants';
import { visitTavern } from '../../actions/actionActions';

class TavernPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            type: VETERAN
        };
    }

    handleTypeChange(event) {
        this.setState({ 
            type: event
        });
    }

    render() {
        return <Card className="mb-4">
            <Card.Img variant="top" width="600px" src="https://storage.googleapis.com/withergate-images/locations/tavern.png" />
            <Card.Body>
                <Row>
                    <Col md={12}>
                        <p><Translate id="tavern.description" /></p>
                        <p><small><Translate id="tavern.info" /></small></p>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                { this.props.selectedCharacter !== undefined ? 
                    <Row>
                        <Col md={2}>
                            <Button
                                variant="dark"
                                className="button-classic"
                                onClick={() => this.props.visitTavern(this.props.selectedCharacter.id, this.state.type)}
                                disabled={this.props.selectedCharacter.state !== 'READY'}>
                                <Translate id="labels.visit" />
                            </Button>
                        </Col>
                        <Col md={4}>
                            <ToggleButtonGroup type="radio" name="characterType" defaultValue={this.state.type} onChange={e => this.handleTypeChange(e)}>
                                <ToggleButton variant="outline-dark" value={ROOKIE}>
                                    <b>50</b> <Image className="mr-1" height="20" src={caps} /><Translate id="labels.rookie" />
                                </ToggleButton>
                                <ToggleButton variant="outline-dark" value={VETERAN}>
                                    <b>80</b> <Image className="mr-1" height="20" src={caps} /><Translate id="labels.veteran" />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                    : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                }
            </Card.Footer>
        </Card>
    }
};

TavernPanel.propTypes = {
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const { selectedCharacter } = state.clan;

    const fetching = state.clan.fetching;
    const fetched = state.clan.fetched;
    const failed = state.clan.failed || state.action.failed;

    const error = state.clan.error || state.action.error;

    return { fetching, fetched, failed, error, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        visitTavern
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TavernPanel);