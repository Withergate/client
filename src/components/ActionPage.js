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

import { fetchLocations, fetchClan } from '../actions/dataActions';
import { visitLocation, constructBuilding, goOnQuest, tradeResources } from '../actions/actionActions';
import { selectActionTab, selectCharacter } from '../actions/uiActions';
import ResourceTradePanel from './trade/ResourceTradePanel';

class ActionPage extends Component {

    componentDidMount() {
        this.props.fetchClan();
        this.props.fetchLocations();
    }

    render() {
        return (
            <div>
                {
                    this.props.failed && <Error message={this.props.error} />
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
                                    </Nav>
                                </Col>
                                <Col md={10} sm={8}>
                                    <CharacterSelector 
                                        characters={this.props.clan.characters}
                                        selectedCharacter={this.props.selectedCharacter}
                                        onSelect={this.props.selectCharacter} />
                                    <Tab.Content>
                                        <Tab.Pane eventKey="locations">
                                            <LocationList 
                                                locations={this.props.locations} 
                                                selectedCharacter={this.props.selectedCharacter}
                                                onVisit={this.props.visitLocation} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="buildings">
                                            <div>
                                                <BuildingList 
                                                    buildings={this.props.clan.buildings}
                                                    constructBuilding={this.props.constructBuilding}
                                                    selectedCharacter={this.props.selectedCharacter}
                                                    actionable={true} />
                                            </div>
                                            <div>
                                                <BuildingList 
                                                    buildings={this.props.clan.unconstructedBuildings}
                                                    constructBuilding={this.props.constructBuilding}
                                                    selectedCharacter={this.props.selectedCharacter}
                                                    actionable={true} />
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="quests">
                                            <QuestList 
                                                quests={this.props.clan.quests.filter(quest => !quest.completed)} 
                                                selectedCharacter={this.props.selectedCharacter}
                                                goOnQuest={this.props.goOnQuest} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="marketplace">
                                            <ResourceTradePanel 
                                                selectedCharacter={this.props.selectedCharacter}
                                                onTrade={this.props.tradeResources}
                                            />
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
    fetchClan: PropTypes.func.isRequired,
    fetchLocations: PropTypes.func.isRequired,
    visitLocation: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    locations: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    clan: PropTypes.object.isRequired,
    selectCharacter: PropTypes.func.isRequired,
    constructBuilding: PropTypes.func.isRequired,
    goOnQuest: PropTypes.func.isRequired,
    tradeResources: PropTypes.func.isRequired,
    selectActionTab: PropTypes.func.isRequired,
    selectedTab: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { locations } = state.data;
    const { selectedCharacter, clan } = state.clan;

    const fetching = state.data.fetching || state.clan.fetching;
    const fetched = state.data.fetched && state.clan.fetched;
    const failed = state.data.failed || state.clan.failed;

    const error = state.clan.error || state.data.error;

    const selectedTab = state.ui.actionTab;

    return { fetching, fetched, failed, error, locations, selectedCharacter, clan, selectedTab };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchLocations,
        visitLocation,
        fetchClan,
        selectCharacter,
        constructBuilding,
        goOnQuest,
        tradeResources,
        selectActionTab
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ActionPage);