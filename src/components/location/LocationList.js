import React from 'react';
import PropTypes from 'prop-types';

import LocationListItem from './LocationListItem';

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

const LocationList = (props) => (
    <div>
        {renderList(props.locations, props.selectedCharacter, props.onVisit)}
    </div>
);

LocationList.propTypes = {
    locations: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    onVisit: PropTypes.func.isRequired
};

export default LocationList;