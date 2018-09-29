import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Error } from './shared/Error';
import LocationList from './location/LocationList';
import spinner from '../images/spinner.gif';
import CharacterSelector from './clan/CharacterSelector';

import { fetchLocations, visitLocation } from '../actions/locationActions';
import { fetchClan, selectCharacter } from '../actions/clanActions';

class LocationsPage extends Component {

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
                    <div>
                        <CharacterSelector 
                            characters={this.props.clan.characters}
                            selectedCharacter={this.props.selectedCharacter}
                            onSelect={this.props.selectCharacter} />

                        <LocationList 
                            locations={this.props.locations} 
                            selectedCharacter={this.props.selectedCharacter}
                            onVisit={this.props.visitLocation} />
                    </div>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        );
    }
}

LocationsPage.propTypes = {
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
    selectCharacter: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { error, locations } = state.data;
    const { selectedCharacter, clan } = state.clan;

    const fetching = state.data.fetching || state.clan.fetching;
    const fetched = state.data.fetched && state.clan.fetched;
    const failed = state.data.failed || state.clan.failed;

    return { fetching, fetched, failed, error, locations, selectedCharacter, clan };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchLocations, visitLocation, fetchClan, selectCharacter }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);