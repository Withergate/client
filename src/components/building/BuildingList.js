import React from 'react';
import PropTypes from 'prop-types';

import BuildingListItem from './BuildingListItem';

const renderList = (buildings, selectedCharacter, constructBuilding) => (
    <div>
        {buildings.map(building => renderListItem(building, selectedCharacter, constructBuilding))}
    </div>
);

const renderListItem = (building, selectedCharacter, constructBuilding) => (
    <div key={building.id}>
        <BuildingListItem building={building} selectedCharacter={selectedCharacter} constructBuilding={constructBuilding} />
    </div>
);

const BuildingList = (props) => (
    <div>
        {renderList(props.buildings, props.selectedCharacter, props.constructBuilding)}
    </div>
);

BuildingList.propTypes = {
    buildings: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    constructBuilding: PropTypes.func.isRequired
};

export default BuildingList;