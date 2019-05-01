import React from 'react';
import PropTypes from 'prop-types';

import WeaponListItem from './WeaponListItem';
import GearListItem from './GearListItem';
import OutfitListItem from './OutfitListItem';
import ConsumableListItem from './ConsumableListItem';

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

const renderConsumableItem = (consumable, selectedCharacter, useConsumable) => (
    <div key={consumable.id}>
        <ConsumableListItem consumable={consumable} selectedCharacter={selectedCharacter} useConsumable={useConsumable} />
    </div>
);

const ItemList = (props) => (
    <div>
        { (props.weapons.length > 0) &&
            props.weapons.map(weapon => renderWeaponItem(weapon, props.selectedCharacter, props.equipItem))
        }
        { (props.gear.length > 0) &&
            props.gear.map(gear => renderGearItem(gear, props.selectedCharacter, props.equipItem))
        }
        { (props.outfits.length > 0) &&
            props.outfits.map(outfit => renderOutfitItem(outfit, props.selectedCharacter, props.equipItem))
        }
        { (props.consumables.length > 0) &&
            props.consumables.map(consumable => renderConsumableItem(consumable, props.selectedCharacter, props.useConsumable))
        }
    </div>
);

ItemList.propTypes = {
    weapons: PropTypes.array.isRequired,
    gear: PropTypes.array.isRequired,
    outfits: PropTypes.array.isRequired,
    consumables: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    equipItem: PropTypes.func.isRequired,
    useConsumable: PropTypes.func.isRequired
};

export default ItemList;