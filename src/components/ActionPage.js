import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

import { Error } from './shared/Error';
import LocationList from './location/LocationList';
import spinner from '../images/spinner.gif';
import CharacterSelector from './clan/CharacterSelector';
import BuildingList from './building/BuildingList';
import QuestList from './quest/QuestList';
import ArenaPanel from './arena/ArenaPanel';
import ResourceTradePanel from './trade/ResourceTradePanel';
import TavernPanel from './location/TavernPanel';
import ClanOfferList from './trade/ClanOfferList';

import { fetchClan } from '../actions/dataActions';
import { 
    publishOffer
} from '../actions/actionActions';
import {
    selectActionTab,
    selectCharacter,
    dismissError,
    changeClanOfferFilter
} from '../actions/uiActions';
import MarketOfferList from './trade/MarketOfferList';
import DisasterPanel from './disaster/DisasterPanel';

class ActionPage extends Component {
    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchClan();
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.error && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
                {
                    this.props.fetched && 
                    <div className="m-3">
                        <Tab.Container id="tab-navigation" defaultActiveKey={this.props.selectedTab} onSelect={key => this.props.selectActionTab(key)}>
                            <Row>
                                <Col md={2} sm={4}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="locations" className="tab-link"><Translate id="basic.locations" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="buildings" className="tab-link"><Translate id="basic.buildings" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="quests" className="tab-link"><Translate id="basic.quests" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="marketplace" className="tab-link"><Translate id="basic.marketplace" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="arena" className="tab-link"><Translate id="basic.arena" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tavern" className="tab-link"><Translate id="basic.tavern" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="disaster" className="tab-link"><Translate id="basic.disaster" /></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col md={10} sm={8}>
                                    <CharacterSelector 
                                        characters={this.props.clan.characters}
                                        selectedCharacter={this.props.selectedCharacter}
                                        onSelect={this.props.selectCharacter} />
                                    <Tab.Content>
                                        <Tab.Pane eventKey="locations">
                                            <LocationList />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="buildings">
                                            <BuildingList 
                                                actionable={true} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="quests">
                                            <QuestList />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="marketplace">
                                            <ResourceTradePanel />
                                            <Row className="mt-4">
                                                <Col md={6}>
                                                    <ClanOfferList 
                                                        weapons={this.props.clan.weapons}
                                                        outfits={this.props.clan.outfits}
                                                        gear={this.props.clan.gear}
                                                        consumables={this.props.clan.consumables}
                                                        publishOffer={this.props.publishOffer} 
                                                        filter={this.props.filter.clanOffers }
                                                        changeFilter={this.props.changeClanOfferFilter} />
                                                </Col>
                                                <Col md={6}>
                                                    <MarketOfferList />
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="arena">
                                            <ArenaPanel />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tavern">
                                            <TavernPanel />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="disaster">
                                            <DisasterPanel />
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

ActionPage.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    selectedCharacter: PropTypes.object,
    clan: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    const offers = state.data.offers;
    const { selectedCharacter, clan } = state.clan;

    const fetching = state.clan.fetching || state.action.fetching;
    const fetched = state.clan.fetched && state.action.fetched;
    const failed = state.clan.failed || state.action.failed;

    const error = state.clan.error || state.data.error || state.action.error;

    const selectedTab = state.ui.actionTab;
    const { filter } = state.ui;

    return { fetching, fetched, failed, error, offers, selectedCharacter, clan, selectedTab, filter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchClan,
        selectCharacter,
        selectActionTab,
        dismissError,
        changeClanOfferFilter,
        publishOffer
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ActionPage);