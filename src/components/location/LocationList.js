import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LocationListItem from './LocationListItem';

import { visitLocation } from '../../actions/actionActions';
import { fetchLocations } from '../../actions/dataActions';

import spinner from '../../images/spinner.gif';

class LocationList extends React.Component {
    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchLocations();
        }
    }

    render() {
        return ( 
            <div>
                { this.props.fetched &&
                    renderList(this.props.locations, this.props.selectedCharacter, this.props.visitLocation)
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        )
    }
};

const renderList = (locations, selectedCharacter, onVisit) => (
    <div>
        {locations.map(location => renderListItem(location, selectedCharacter, onVisit))}
    </div>
);

const renderListItem = (location, selectedCharacter, onVisit) => (
    <div key={location.location}>
        <LocationListItem location={location} selectedCharacter={selectedCharacter} onVisit={onVisit} />
    </div>
);

LocationList.propTypes = {
    locations: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    visitLocation: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { selectedCharacter } = state.clan;
    const locations = state.data.locations.data;

    const fetching = state.data.locations.fetching;
    const fetched = state.data.locations.fetched;
    const failed = state.data.locations.failed;

    return { fetching, fetched, failed, locations, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        visitLocation,
        fetchLocations
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);