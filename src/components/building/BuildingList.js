import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Link } from 'react-router-dom';
import { orderBy } from "lodash";

import { constructBuilding } from '../../actions/actionActions';
import {
    changeBuildingSortKey,
    changeBuildingSortDirection
} from '../../actions/uiActions';

import BuildingListItem from './BuildingListItem';
import BuildingSort from './BuildingSort';

const sort = (list, sort) => {
    return orderBy(list, [sort.key], [sort.direction]);
}

const renderList = (props) => (
    <div>
        <BuildingSort
            sort={props.sort}
            sortKeyAction={props.changeBuildingSortKey}
            sortDirectionAction={props.changeBuildingSortDirection} />
        {
            sort(props.buildings, props.sort)
                // filter out buildings with level 0 in the non-actionable list
                .filter(building => (!props.actionable && building.level < 1) ? false : true)
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
    sort: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;
    const buildings = state.clan.clan.buildings;
    const filter = state.ui.filter.buildings;
    const sort = state.ui.sort.buildings;

    return { selectedCharacter, buildings, filter, sort };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        constructBuilding,
        changeBuildingSortDirection,
        changeBuildingSortKey
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BuildingList);