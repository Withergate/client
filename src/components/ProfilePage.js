import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectProfileTab } from '../actions/uiActions';
import { changeTheme } from '../actions/profileActions';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';
import ProfilePanel from './profile/ProfilePanel';
import AccountPanel from './profile/AccountPanel';
import NewsletterPanel from './profile/NewsletterPanel';
import { SILVER } from '../constants/constants';
import { checkPremium } from './profile/premiumUtils';
import ThemePicker from './profile/ThemePicker';

class ProfilePage extends Component {
    render() {
        return (
            <div className="m-3">
                <Tab.Container id="tab-navigation" defaultActiveKey={this.props.selectedTab} onSelect={key => this.props.selectProfileTab(key)}>
                    <Row>
                        <Col md={2} sm={4} className="mb-4">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="profile" className="tab-link"><Translate id="basic.profile" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="historical" className="tab-link"><Translate id="basic.historical" /></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={10} sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="profile">
                                    <Row className="mb-4">
                                        <Col className="mb-2">
                                            <ProfilePanel profile={this.props.profile} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} xs={12}>
                                            <AccountPanel />
                                            { checkPremium(this.props.profile.premiumType, SILVER) &&
                                                <ThemePicker />
                                            }
                                        </Col>
                                        <Col md={6} xs={12}>
                                        <NewsletterPanel />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="historical">
                                    <Translate id="profile.history" />
                                </Tab.Pane>     
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    profile: PropTypes.object.isRequired,
    selectedTab: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const profile = state.profile.profile.data;
    const selectedTab = state.ui.profileTab;

    return { profile, selectedTab };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ selectProfileTab, changeTheme }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);