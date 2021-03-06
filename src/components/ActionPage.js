import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tab, Row, Col, Nav, Card } from 'react-bootstrap';
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
    selectActionTab,
    dismissError
} from '../actions/uiActions';
import MarketOfferList from './trade/MarketOfferList';
import DisasterPanel from './disaster/DisasterPanel';
import BasePanel from './location/BasePanel';
import ResearchList from './research/ResearchList';
import TraitPanel from './clan/TraitPanel';
import FactionsSelectorPanel from './faction/FactionSelectorPanel';
import FactionPanel from './faction/FactionPanel';
import CraftingList from './item/CraftingList';
import HelpPanel from './notification/HelpPanel';

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
                    this.props.error && <Error error={this.props.error} dismiss={this.props.dismissError} />
                }
                {
                    this.props.turn.turnId > this.props.maxTurns &&
                    <Card className="m-3" bg="warning">
                        <Card.Body>
                            <Translate id="labels.endGame" />
                        </Card.Body>
                    </Card>
                }
                {
                    this.props.fetched &&
                    <div className="m-3">
                        <Tab.Container id="tab-navigation" defaultActiveKey={this.props.selectedTab} onSelect={key => this.props.selectActionTab(key)}>
                            <Row>
                                <Col md={2} sm={4} className="mb-4">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="locations" className="tab-link"><Translate id="basic.locations" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="buildings" className="tab-link"><Translate id="basic.buildings" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="crafting" className="tab-link"><Translate id="basic.crafting" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="research" className="tab-link"><Translate id="basic.research" /></Nav.Link>
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
                                        <Nav.Item>
                                            <Nav.Link eventKey="base" className="tab-link"><Translate id="basic.base" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="faction" className="tab-link"><Translate id="basic.faction" /></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col md={10} sm={8}>
                                    <HelpPanel />
                                    <CharacterSelector />
                                    <Tab.Content>
                                        <Tab.Pane eventKey="locations">
                                            <LocationList />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="buildings">
                                            <BuildingList 
                                                actionable={true} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="crafting">
                                            <CraftingList />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="research">
                                            <ResearchList actionable={true} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="quests">
                                            <QuestList />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="marketplace">
                                            <ResourceTradePanel />
                                            <Row className="mt-4">
                                                <Col md={6} className="mb-4">
                                                    <ClanOfferList />
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
                                        <Tab.Pane eventKey="base">
                                            <BasePanel />
                                            <TraitPanel />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="faction">
                                            { this.props.clan.faction ?
                                                <FactionPanel />
                                                : <FactionsSelectorPanel />
                                            }
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
    failed: PropTypes.bool.isRequired,
    error: PropTypes.object,
    clan: PropTypes.object.isRequired,
    turn: PropTypes.object.isRequired,
    maxTurns: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const offers = state.data.offers;
    const { clan } = state.clan;

    const fetching = state.clan.fetching || state.action.fetching;
    const fetched = state.clan.fetched && state.action.fetched;
    const failed = state.clan.failed || state.action.failed;

    const error = state.clan.error || state.action.error;

    const selectedTab = state.ui.actionTab;

    const turn = state.turn.turn;
    const maxTurns = state.game.properties.maxTurns;

    return { fetching, fetched, failed, error, offers, clan, selectedTab, turn, maxTurns };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchClan,
        selectActionTab,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ActionPage);