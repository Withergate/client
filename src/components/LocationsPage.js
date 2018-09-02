import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Error } from './shared/Error';
import LocationList from './location/LocationList';

import { fetchLocations, visitLocation } from '../actions/locationActions';
import { fetchClan } from '../actions/clanActions';

class LocationsPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchClan();
        this.props.fetchLocations();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && 
                    <div>
                        <LocationList 
                            locations={this.props.locations} 
                            selectedCharacter={this.props.selectedCharacter}
                            onVisit={this.props.visitLocation} />
                    </div>
                }
                {
                    this.props.fetching && <div>Loading...</div>
                }
                {
                    this.props.failed && <Error message={this.props.error} />
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
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const { locations } = state.data;
    const { error, selectedCharacter } = state.clan;

    const fetching = state.data.fetching || state.clan.fetching;
    const fetched = state.data.fetched && state.clan.fetched;
    const failed = state.data.failed || state.clan.failed;

    return { fetching, fetched, failed, error, locations, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchLocations, visitLocation, fetchClan }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);