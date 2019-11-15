import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import WeaponListItem from './WeaponListItem';
import GearListItem from './GearListItem';
import OutfitListItem from './OutfitListItem';
import ConsumableListItem from './ConsumableListItem';
import ItemFilter from './ItemFilter';
import { ALL, WEAPON, OUTFIT, GEAR, CONSUMABLE } from '../../constants/constants';

const renderWeaponItem = (weapon, selectedCharacter, equipItem) => (
    <div key={weapon.id}>
        <WeaponListItem weapon={weapon} selectedCharacter={selectedCharacter} equipItem={equipItem} />
    </div>
);

const renderGearItem = (gear, selectedCharacter, equipItem) => (
    <div key={gear.id}>
        <GearListItem gear={gear} selectedCharacter={selectedCharacter} equipItem={equipItem} />
    </div>
);

const renderOutfitItem = (outfit, selectedCharacter, equipItem) => (
    <div key={outfit.id}>
        <OutfitListItem outfit={outfit} selectedCharacter={selectedCharacter} equipItem={equipItem} />
    </div>
);

const renderConsumableItem = (consumable, selectedCharacter, consume) => (
    <div key={consumable.id}>
        <ConsumableListItem consumable={consumable} selectedCharacter={selectedCharacter} consume={consume} />
    </div>
);

const ItemList = (props) => (
    <div>
        <ItemFilter filter={props.filter} onChange={props.changeFilter} />
        {
            props.items.length === 0 && <Translate id="labels.noItems" />
        }
        { (props.filter === ALL || props.filter === WEAPON) &&
            props.items.filter(item => item.details.itemType === WEAPON)
            .map(weapon => renderWeaponItem(weapon, props.selectedCharacter, props.equipItem))
        }
        { (props.filter === ALL || props.filter === GEAR) &&
            props.items.filter(item => item.details.itemType === GEAR)
            .map(gear => renderGearItem(gear, props.selectedCharacter, props.equipItem))
        }
        { (props.filter === ALL || props.filter === OUTFIT) &&
            props.items.filter(item => item.details.itemType === OUTFIT)
            .map(outfit => renderOutfitItem(outfit, props.selectedCharacter, props.equipItem))
        }
        { (props.filter === ALL || props.filter === CONSUMABLE) &&
            props.items.filter(item => item.details.itemType === CONSUMABLE)
            .map(consumable => renderConsumableItem(consumable, props.selectedCharacter, props.consume))
        }
    </div>
);

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    equipItem: PropTypes.func.isRequired,
    consume: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
};

export default ItemList;