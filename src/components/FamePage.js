import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Row, Col, Tab, Nav } from 'react-bootstrap';

import { selectLadderTab } from '../actions/uiActions';
import FameLadder from './ladder/FameLadder';

class FamePage extends Component {

    render() {
        return (
            <div className="m-3">
                <Tab.Container id="tab-navigation" defaultActiveKey={this.props.selectedTab} onSelect={key => this.props.selectLadderTab(key)}>
                    <Row>
                        <Col md={2} sm={4} className="mb-4">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="clans" className="tab-link"><Translate id="ladder.clans" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="players" className="tab-link"><Translate id="ladder.players" /></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={10} sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="clans">
                                    <FameLadder />
                                </Tab.Pane>
                                <Tab.Pane eventKey="players">
                                    <Translate id="ladder.preparing" />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

FamePage.propTypes = {
    selectedTab: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const selectedTab = state.ui.ladderTab;

    return { selectedTab };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ selectLadderTab }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FamePage);