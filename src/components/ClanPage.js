import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

import CharacterList from './clan/CharacterList';
import ClanSummary from './clan/ClanSummary';
import CharacterSelector from './clan/CharacterSelector';
import ItemList from './item/ItemList';
import BuildingList from './building/BuildingList';
import QuestListCompleted from './quest/QuestListCompleted';
import { Error } from './shared/Error';
import spinner from '../images/spinner.gif';

import { 
    equipItem,
    unequipItem,
    useConsumable,
    restWithCharacter
} from '../actions/actionActions';
import { fetchClan } from '../actions/dataActions';
import { 
    selectClanTab,
    selectCharacter,
    dismissError,
    changeCharacterSortKey,
    changeCharacterSortDirection,
    changeBuildingSortKey,
    changeBuildingSortDirection,
    changeItemFilter
} from '../actions/uiActions';

class ClanPage extends Component {

    componentDidMount() {
        this.props.fetchClan();
    }

    render() {
        return (
            <div>
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
                {
                    this.props.fetched && 
                    <div className="m-3">
                        <Tab.Container id="tab-navigation" defaultActiveKey={this.props.selectedTab} onSelect={key => this.props.selectClanTab(key)}>
                            <Row>
                                <Col md={2} sm={4}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="overview" className="tab-link"><Translate id="basic.overview" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="characters" className="tab-link"><Translate id="basic.characters" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="items"className="tab-link" ><Translate id="basic.items" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="buildings"className="tab-link" ><Translate id="basic.buildings" /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="quests"className="tab-link" ><Translate id="basic.questsCompleted" /></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col md={10} sm={8}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="overview">
                                            <ClanSummary clan={this.props.clan} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="characters">
                                            <CharacterList 
                                                characters={this.props.clan.characters}
                                                unequipItem={this.props.unequipItem}
                                                restWithCharacter={this.props.restWithCharacter}
                                                sort={this.props.sort.characters}
                                                sortKeyAction={this.props.changeCharacterSortKey}
                                                sortDirectionAction={this.props.changeCharacterSortDirection} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="items">
                                            <Row>
                                                <Col>
                                                    <ItemList
                                                        weapons={this.props.clan.weapons}
                                                        gear={this.props.clan.gear}
                                                        outfits={this.props.clan.outfits}
                                                        consumables={this.props.clan.consumables}
                                                        equipItem={this.props.equipItem}
                                                        useConsumable={this.props.useConsumable}
                                                        selectedCharacter={this.props.selectedCharacter}
                                                        filter={this.props.filter.items }
                                                        changeFilter={this.props.changeItemFilter} />
                                                </Col>
                                                <Col>
                                                    <CharacterSelector 
                                                        characters={this.props.clan.characters}
                                                        selectedCharacter={this.props.selectedCharacter}
                                                        onSelect={this.props.selectCharacter}
                                                        orientation="vertical" />
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="buildings">
                                            <BuildingList 
                                                buildings={this.props.clan.buildings}
                                                selectedCharacter={this.props.selectedCharacter}
                                                actionable={false}
                                                sort={this.props.sort.buildings}
                                                sortKeyAction={this.props.changeBuildingSortKey}
                                                sortDirectionAction={this.props.changeBuildingSortDirection} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="quests">
                                            <QuestListCompleted 
                                                quests={this.props.clan.quests.filter(quest => quest.completed)} />
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

ClanPage.propTypes = {
    fetchClan: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    clan: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    selectedTab: PropTypes.string.isRequired,
    sort: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { clan, selectedCharacter } = state.clan;

    const fetching = state.clan.fetching || state.action.fetching;
    const fetched = state.clan.fetched && state.action.fetched;
    const failed = state.clan.failed || state.action.failed;
    const error = state.clan.error || state.action.error;

    const selectedTab = state.ui.clanTab;
    const { sort, filter } = state.ui;

    return { fetching, fetched, failed, error, clan, selectedCharacter, selectedTab, sort, filter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchClan,
        equipItem,
        unequipItem,
        useConsumable,
        restWithCharacter,
        selectCharacter,
        selectClanTab,
        dismissError,
        changeCharacterSortKey,
        changeCharacterSortDirection,
        changeBuildingSortKey,
        changeBuildingSortDirection,
        changeItemFilter
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanPage);