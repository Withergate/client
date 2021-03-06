import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, Row, Col, Tab, Nav } from 'react-bootstrap';
import { restartGame, endTurn } from '../actions/authActions';
import { fetchGlobalNotification } from '../actions/dataActions';
import ConfirmationDialog from '../components/shared/ConfirmationDialog';

import { selectAdminTab } from '../actions/uiActions';
import { Error } from './shared/Error';
import spinner from '../images/spinner.gif';
import { Translate } from 'react-localize-redux';
import NotificationPanel from './admin/NotificationPanel';
import TurnPanel from './admin/TurnPanel';
import { INGAME, GLOBAL } from '../constants/constants';

class AdminPage extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { 
            endTurnModal: false,
            restartGameModal: false
        };
    }

    componentDidMount() {
        this.props.fetchGlobalNotification(INGAME);
        this.props.fetchGlobalNotification(GLOBAL);
    }

    render() {
        return (
            <div>
                {
                    this.props.failed && <Error error={this.props.error} />
                }
                {
                    this.props.principal.role === 'ADMIN' && this.props.fetched && 
                    <div className="m-3">
                        <Tab.Container id="tab-navigation" defaultActiveKey={this.props.selectedTab} onSelect={key => this.props.selectAdminTab(key)}>
                            <Row>
                                <Col md={2} sm={4} className="mb-4">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="game" className="tab-link"><Translate id="admin.game" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="notifications" className="tab-link"><Translate id="admin.notifications" /></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col md={10} sm={8}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="game">
                                            <Card className="mb-4">
                                                <Card.Body>
                                                    <Translate id="admin.endTurnDescription" />
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Button
                                                        className="button-large"
                                                        variant="danger"
                                                        onClick={() => this.setState({ endTurnModal: true })} >
                                                        <Translate id="admin.endTurn" />
                                                    </Button> 
                                                </Card.Footer>
                                            </Card>

                                            <Card className="mb-4">
                                                <Card.Body>
                                                    <Translate id="admin.restartGameDescription" />
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Button
                                                        className="button-large"
                                                        variant="danger"
                                                        onClick={() => this.setState({ restartGameModal: true })} >
                                                        <Translate id="admin.restartGame" />
                                                    </Button>
                                                </Card.Footer>
                                            </Card>
                                            
                                            <TurnPanel />

                                            <ConfirmationDialog
                                                show={this.state.endTurnModal}
                                                text="admin.endTurnConfirmation"
                                                heading="admin.endTurn"
                                                onClose={() => this.setState({ endTurnModal: false })}
                                                onConfirm={() => this.props.endTurn()} />
                                            <ConfirmationDialog
                                                show={this.state.restartGameModal}
                                                text="admin.restartGameConfirmation"
                                                heading="admin.restartGame"
                                                onClose={() => this.setState({ restartGameModal: false })}
                                                onConfirm={() => this.props.restartGame()} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="notifications">
                                            <NotificationPanel type={INGAME} />
                                            <NotificationPanel type={GLOBAL} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
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
    error: PropTypes.string,
    restartGame: PropTypes.func.isRequired,
    endTurn: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { principal } = state.auth;

    const fetching = state.auth.fetching || state.notifications.global.fetching;
    const fetched = state.auth.fetched && state.notifications.global.fetched;
    const failed = state.auth.failed || state.notifications.global.failed;
    const error = state.auth.error || state.notifications.global.error;
    const selectedTab = state.ui.adminTab;

    return { fetching, fetched, failed, error, principal, selectedTab };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ restartGame, endTurn, fetchGlobalNotification, selectAdminTab }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);