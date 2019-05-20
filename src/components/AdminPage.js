import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card } from 'react-bootstrap';
import { restartGame, endTurn } from '../actions/authActions';
import ConfirmationDialog from '../components/shared/ConfirmationDialog';

import { Error } from './shared/Error';
import spinner from '../images/spinner.gif';
import { Translate } from 'react-localize-redux';
import NotificationPanel from './admin/NotificationPanel';

class AdminPage extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { 
            endTurnModal: false,
            restartGameModal: false
        };
    }

    render() {
        return (
            <div>
                {
                    this.props.failed && <Error message={this.props.error} />
                }
                {
                    this.props.principal.role !== 'ADMIN' && <Error message="Only administrators can access this page!" />
                }
                {
                    this.props.principal.role === 'ADMIN' && this.props.fetched && 
                    <div className="m-4">
                        <Card className="mb-4">
                            <Card.Body>
                                <Translate id="labels.endTurnDescription" />
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    className="button-large"
                                    variant="danger"
                                    onClick={() => this.setState({ endTurnModal: true })} >
                                    <Translate id="labels.endTurn" />
                                </Button> 
                            </Card.Footer>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Translate id="labels.restartGameDescription" />
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    className="button-large"
                                    variant="danger"
                                    onClick={() => this.setState({ restartGameModal: true })} >
                                    <Translate id="labels.restartGame" />
                                </Button>
                            </Card.Footer>
                        </Card>

                        <ConfirmationDialog
                            show={this.state.endTurnModal}
                            text="labels.endTurnConfirmation"
                            heading="labels.endTurn"
                            onClose={() => this.setState({ endTurnModal: false })}
                            onConfirm={() => this.props.endTurn()} />
                        <ConfirmationDialog
                            show={this.state.restartGameModal}
                            text="labels.restartGameConfirmation"
                            heading="labels.restartGame"
                            onClose={() => this.setState({ restartGameModal: false })}
                            onConfirm={() => this.props.restartGame()} />

                        <NotificationPanel />
                    </div>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        );
    }
}

AdminPage.propTypes = {
    principal: PropTypes.object.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    restartGame: PropTypes.func.isRequired,
    endTurn: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error, principal } = state.auth;


    return { fetching, fetched, failed, error, principal };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ restartGame, endTurn }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);