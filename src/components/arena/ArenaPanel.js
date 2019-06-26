import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";

import { visitArena } from '../../actions/actionActions';

import { Row, Col, Button, Card } from 'react-bootstrap';

class ArenaPanel extends React.Component {
    render() {
        return ( 
            <Card className="mb-4">
                <Card.Img variant="top" width="600px" src="https://storage.googleapis.com/withergate-images/locations/arena.png" />
                <Card.Body>
                    <Row>
                        <Col md={12}>
                            <p><Translate id="arena.description" /></p>
                            <p><small><Translate id="arena.info" /></small></p>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    { this.props.selectedCharacter !== undefined ? 
                        <Row>
                            <Button
                                variant="dark"
                                className="m-2 button-classic" 
                                onClick={() => this.props.visitArena(this.props.selectedCharacter.id)}
                                disabled={this.props.selectedCharacter.state !== 'READY'}>
                                <Translate id="labels.visit" />
                            </Button>
                        </Row>
                        : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                    }
                </Card.Footer>
            </Card>
        )
    }
};

ArenaPanel.propTypes = {
    selectedCharacter: PropTypes.object,
    visitArena: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;

    return { selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        visitArena
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ArenaPanel);