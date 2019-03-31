import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Link } from 'react-router-dom';

import ConsumableListItem from './ConsumableListItem';

const renderList = (consumables, selectedCharacter, useConsumable) => (
    <div>
        {consumables.map(consumable => renderListItem(consumable, selectedCharacter, useConsumable))}
    </div>
);

const renderListItem = (consumable, selectedCharacter, useConsumable) => (
    <div key={consumable.id}>
        <ConsumableListItem consumable={consumable} selectedCharacter={selectedCharacter} useConsumable={useConsumable} />
    </div>
);

const ConsumableList = (props) => (
    <div>
        {
            props.consumables.length ? 
                renderList(props.consumables, props.selectedCharacter, props.useConsumable)
                : <div>
                    <Translate id="labels.noItems" /> -> <Link className="action-link" to='/action'><Translate id="header.actions" /></Link>
                </div>
            }
    </div>
);

ConsumableList.propTypes = {
    consumables: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    useConsumable: PropTypes.func.isRequired
};

export default ConsumableList;