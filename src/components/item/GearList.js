import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Link } from 'react-router-dom';

import GearListItem from './GearListItem';

const renderList = (gear, selectedCharacter, equipGear) => (
    <div>
        {gear.map(gear => renderListItem(gear, selectedCharacter, equipGear))}
    </div>
);

const renderListItem = (gear, selectedCharacter, equipGear) => (
    <div key={gear.id}>
        <GearListItem gear={gear} selectedCharacter={selectedCharacter} equipGear={equipGear} />
    </div>
);

const GearList = (props) => (
    <div>
        { props.gear.length ? 
            renderList(props.gear, props.selectedCharacter, props.equipGear)
            : <div>
                 <Translate id="labels.noGear" /> -> <Link className="action-link" to='/action'><Translate id="header.actions" /></Link>
            </div>
        }
    </div>
);

GearList.propTypes = {
    gear: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    equipGear: PropTypes.func.isRequired
};

export default GearList;