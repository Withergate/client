import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CharacterList from './clan/CharacterList';
import ClanSummary from './clan/ClanSummary';
import CharacterSelector from './clan/CharacterSelector';
import WeaponList from './item/WeaponList';
import ConsumableList from './item/ConsumableList';
import BuildingList from './building/BuildingList';
import { Error } from './shared/Error';
import spinner from '../images/spinner.gif';

import { fetchClan, equipWeapon, unequipWeapon, useConsumable, selectCharacter,
    constructBuilding } from '../actions/clanActions';

class ClanPage extends Component {

    constructor() {
        super();
        this.state = { tabIndex: 0 };
      }

    componentDidMount() {
        this.props.fetchClan();
    }

    render() {
        return (
            <div>
                {
                    this.props.failed && <Error message={this.props.error} />
                }
                {
                    this.props.fetched && 
                    <div>
                        <CharacterSelector 
                            characters={this.props.clan.characters}
                            selectedCharacter={this.props.selectedCharacter}
                            onSelect={this.props.selectCharacter} />
                            
                        <ClanSummary clan={this.props.clan} />

                        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList className="pl-4">
                                <Tab>Characters</Tab>
                                <Tab>Items</Tab>
                                <Tab>Buildings</Tab>
                            </TabList>
                            
                            <TabPanel>
                                <CharacterList 
                                    characters={this.props.clan.characters}
                                    unequipWeapon={this.props.unequipWeapon} />
                            </TabPanel>
                            <TabPanel>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <WeaponList 
                                            weapons={this.props.clan.weapons}
                                            equipWeapon={this.props.equipWeapon}
                                            selectedCharacter={this.props.selectedCharacter} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <ConsumableList
                                            consumables={this.props.clan.consumables}
                                            selectedCharacter={this.props.selectedCharacter} 
                                            useConsumable={this.props.useConsumable}/>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <BuildingList 
                                            buildings={this.props.clan.buildings}
                                            constructBuilding={this.props.constructBuilding}
                                            selectedCharacter={this.props.selectedCharacter} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <BuildingList 
                                            buildings={this.props.clan.unconstructedBuildings}
                                            constructBuilding={this.props.constructBuilding}
                                            selectedCharacter={this.props.selectedCharacter} />
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
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
    unequipWeapon: PropTypes.func.isRequired,
    useConsumable: PropTypes.func.isRequired,
    constructBuilding: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error, clan, selectedCharacter, weapons } = state.clan;

    return { fetching, fetched, failed, error, clan, selectedCharacter, weapons };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchClan, equipWeapon, unequipWeapon, useConsumable, selectCharacter, constructBuilding }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanPage);