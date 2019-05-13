import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Link } from 'react-router-dom';
import { orderBy } from "lodash";

import BuildingListItem from './BuildingListItem';
import BuildingSort from './BuildingSort';

const sort = (list, sort) => {
    return orderBy(list, [sort.key], [sort.direction]);
}

const renderList = (props) => (
    <div>
        <BuildingSort
            sort={props.sort}
            sortKeyAction={props.sortKeyAction}
            sortDirectionAction={props.sortDirectionAction} />
        {
            sort(props.buildings, props.sort)
                .map(building => renderListItem(building, props.selectedCharacter, props.constructBuilding, props.actionable))
        }
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
        {
            props.buildings.length ?
                renderList(props)
                : <div>
                    <Translate id="labels.noBuildings" /> -> <Link className="action-link" to='/action'><Translate id="header.actions" /></Link>
                </div>
        }
    </div>
);

BuildingList.propTypes = {
    buildings: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    constructBuilding: PropTypes.func,
    actionable: PropTypes.bool.isRequired,
    sort: PropTypes.object.isRequired,
    sortKeyAction: PropTypes.func.isRequired,
    sortDirectionAction: PropTypes.func.isRequired
};

export default BuildingList;