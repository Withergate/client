import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';
import { FACTION_POINTS, INFORMATION, FOOD, LARGE, JUNK, CAPS, INJURY, ITEM } from '../../constants/constants';
import { GameIcon } from './GameIcon';

const ActionCost = ({actionCost}) => (
    <ul className="list-inline">
        <li className="list-inline-item"><b><Translate id="basic.price" />: </b></li>
            {
                actionCost.foodCost > 0 &&
                <li className="list-inline-item"><GameIcon type={FOOD} size={LARGE} value={actionCost.foodCost} /></li>
            }
            {
                actionCost.junkCost > 0 &&
                <li className="list-inline-item"><GameIcon type={JUNK} size={LARGE} value={actionCost.junkCost} /></li>
            }
            {
                actionCost.capsCost > 0 &&
                <li className="list-inline-item"><GameIcon type={CAPS} size={LARGE} value={actionCost.capsCost} /></li>
            }
            {
                actionCost.factionPointsCost > 0 &&
                <li className="list-inline-item"><GameIcon type={FACTION_POINTS} size={LARGE} value={actionCost.factionPointsCost} /></li>
            }
            {
                actionCost.informationCost > 0 &&
                <li className="list-inline-item"><GameIcon type={INFORMATION} size={LARGE} value={actionCost.informationCost} /></li>
            }
            {
                actionCost.healthCost &&
                <li className="list-inline-item"><GameIcon type={INJURY} size={LARGE} value="1-6" /></li>
            }
            {
                actionCost.itemCost &&
                <li className="list-inline-item">
                    <GameIcon type={ITEM} size={LARGE} value={<small><Translate id={"items.cost." + actionCost.itemCost} /></small>} />
                </li>
            }
            {
                !actionCost.itemCost && !actionCost.junkCost && !actionCost.healthCost && !actionCost.foodCost && !actionCost.capsCost &&
                !actionCost.informationCost && !actionCost.factionPointsCost &&
                <li className="list-inline-item"><Translate id="labels.free" /></li>
            }
    </ul>
);

ActionCost.propTypes = {
    actionCost: PropTypes.object.isRequired
};


export default ActionCost;