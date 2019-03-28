import React from 'react';
import PropTypes from 'prop-types';

import BuildingListItem from './BuildingListItem';

const renderList = (buildings, selectedCharacter, constructBuilding, actionable) => (
    <div>
        {buildings.map(building => renderListItem(building, selectedCharacter, constructBuilding, actionable))}
    </div>
);

const renderListItem = (building, selectedCharacter, constructBuilding, actionable) => (
    <div key={building.details.identifier}>
        <BuildingListItem 
            building={building} 
            selectedCharacter={selectedCharacter} 
            constructBuilding={constructBuilding}
            actionable={actionable} />
    </div>
);

const BuildingList = (props) => (
    <div>
        {renderList(props.buildings, props.selectedCharacter, props.constructBuilding, props.actionable)}
    </div>
);

BuildingList.propTypes = {
    buildings: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    constructBuilding: PropTypes.func,
    actionable: PropTypes.bool.isRequired
};

export default BuildingList;