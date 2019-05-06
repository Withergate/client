import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

import WeaponListItem from './WeaponListItem';
import GearListItem from './GearListItem';
import OutfitListItem from './OutfitListItem';
import ConsumableListItem from './ConsumableListItem';
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

const renderConsumableItem = (consumable, selectedCharacter, useConsumable) => (
    <div key={consumable.id}>
        <ConsumableListItem consumable={consumable} selectedCharacter={selectedCharacter} useConsumable={useConsumable} />
    </div>
);

const ItemList = (props) => (
    <div>
        <Form.Group>
            <Row>
                <Col md={4}>
                    <Form.Label ><Translate id="labels.filter" /></Form.Label>
                </Col>
                <Col md={4}>
                    <Translate>
                    {({ translate }) =>
                        <Form.Control as="select" value={props.filter} onChange={(e) => props.changeFilter(e.target.value)}>
                            <option value={ALL}>{translate("basic.all")}</option>
                            <option value ={WEAPON}>{translate("basic.weapon")}</option>
                            <option value ={OUTFIT}>{translate("basic.outfit")}</option>
                            <option value ={GEAR}>{translate("basic.gear")}</option>
                            <option value ={CONSUMABLE}>{translate("basic.consumable")}</option>
                        </Form.Control>
                    }
                    </Translate>
                </Col>
            </Row>
        </Form.Group>
        { (props.weapons.length > 0) && (props.filter === ALL || props.filter === WEAPON) &&
            props.weapons.map(weapon => renderWeaponItem(weapon, props.selectedCharacter, props.equipItem))
        }
        { (props.gear.length > 0) && (props.filter === ALL || props.filter === GEAR) &&
            props.gear.map(gear => renderGearItem(gear, props.selectedCharacter, props.equipItem))
        }
        { (props.outfits.length > 0) && (props.filter === ALL || props.filter === OUTFIT) &&
            props.outfits.map(outfit => renderOutfitItem(outfit, props.selectedCharacter, props.equipItem))
        }
        { (props.consumables.length > 0) && (props.filter === ALL || props.filter === CONSUMABLE) &&
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
    useConsumable: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
};

export default ItemList;