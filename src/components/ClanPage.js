import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

import CharacterList from './clan/CharacterList';
import ClanSummary from './clan/ClanSummary';
import CharacterSelector from './clan/CharacterSelector';
import WeaponList from './item/WeaponList';
import GearList from './item/GearList';
import ConsumableList from './item/ConsumableList';
import BuildingList from './building/BuildingList';
import QuestListCompleted from './quest/QuestListCompleted';
import { Error } from './shared/Error';
import spinner from '../images/spinner.gif';

import { 
    equipWeapon,
    unequipWeapon,
    useConsumable,
    equipGear,
    unequipGear,
    restWithCharacter
} from '../actions/actionActions';
import { fetchClan } from '../actions/dataActions';
import { 
    selectClanTab,
    selectCharacter,
    dismissError,
    changeCharacterSortKey,
    changeCharacterSortDirection
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
                                                unequipWeapon={this.props.unequipWeapon}
                                                unequipGear={this.props.unequipGear}
                                                restWithCharacter={this.props.restWithCharacter}
                                                sort={this.props.sort.characters}
                                                sortKeyAction={this.props.changeCharacterSortKey}
                                                sortDirectionAction={this.props.changeCharacterSortDirection} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="items">
                                            <CharacterSelector 
                                                characters={this.props.clan.characters}
                                                selectedCharacter={this.props.selectedCharacter}
                                                onSelect={this.props.selectCharacter} />
                                            <Row>
                                                <Col md={6}>
                                                    <WeaponList
                                                        weapons={this.props.clan.weapons}
                                                        equipWeapon={this.props.equipWeapon}
                                                        selectedCharacter={this.props.selectedCharacter} />
                                                    <GearList
                                                        gear={this.props.clan.gear}
                                                        equipGear={this.props.equipGear}
                                                        selectedCharacter={this.props.selectedCharacter} />
                                                </Col>
                                                <Col md={6}>
                                                    <ConsumableList
                                                        consumables={this.props.clan.consumables}
                                                        selectedCharacter={this.props.selectedCharacter} 
                                                        useConsumable={this.props.useConsumable}/>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="buildings">
                                            <BuildingList 
                                                buildings={this.props.clan.buildings}
                                                selectedCharacter={this.props.selectedCharacter}
                                                actionable={false} />
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
    equipWeapon: PropTypes.func.isRequired,
    unequipWeapon: PropTypes.func.isRequired,
    equipGear: PropTypes.func.isRequired,
    unequipGear: PropTypes.func.isRequired,
    useConsumable: PropTypes.func.isRequired,
    restWithCharacter: PropTypes.func.isRequired,
    selectedTab: PropTypes.string.isRequired,
    selectClanTab: PropTypes.func.isRequired,
    dismissError: PropTypes.func.isRequired,
    sort: PropTypes.object.isRequired,
    changeCharacterSortKey: PropTypes.func.isRequired,
    changeCharacterSortDirection: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { clan, selectedCharacter, sort } = state.clan;

    const fetching = state.clan.fetching || state.action.fetching;
    const fetched = state.clan.fetched && state.action.fetched;
    const failed = state.clan.failed || state.action.failed;
    const error = state.clan.error || state.action.error;

    const selectedTab = state.ui.clanTab;

    return { fetching, fetched, failed, error, clan, selectedCharacter, selectedTab, sort };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchClan,
        equipWeapon,
        unequipWeapon,
        equipGear,
        unequipGear,
        useConsumable,
        restWithCharacter,
        selectCharacter,
        selectClanTab,
        dismissError,
        changeCharacterSortKey,
        changeCharacterSortDirection
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanPage);