import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { FOOD, JUNK, INFORMATION, ITEM_CHANCE, SMALL, LARGE, CAPS, FAME } from '../../constants/constants';

import junkIcon from '../../images/junk.png';
import foodIcon from '../../images/food.png';
import capsIcon from '../../images/caps.png';
import fameIcon from '../../images/fame.png';
import informationIcon from '../../images/information.png'
import itemIcon from '../../images/item.png';
import TooltipWrapper from './TooltipWrapper';

const getIconSource = (type) => {
    switch (type) {
        case FOOD: return foodIcon;
        case JUNK: return junkIcon;
        case CAPS: return capsIcon;
        case FAME: return fameIcon;
        case INFORMATION: return informationIcon;
        case ITEM_CHANCE: return itemIcon;
        default: return "";
    }
}

const getTranslationKey = (type) => {
    switch (type) {
        case FOOD: return "basic.food";
        case JUNK: return "basic.junk";
        case CAPS: return "basic.caps";
        case FAME: return "basic.fame";
        case INFORMATION: return "basic.information";
        case ITEM_CHANCE: return "basic.itemChance";
        default: return "";
    }
}

const renderValue = (size, value) => {
    if (size === SMALL) {
        return <small>{value}</small>
    } else {
        return <span>{value}</span>;
    }
}

const GameIcon = (props) => (
    <div className="mr-1 ml-1">
        <TooltipWrapper textKey={getTranslationKey(props.type)}>
            <Image height={props.size === LARGE ? "25px" : "20px"} src={getIconSource(props.type)} className="mr-1"/>
            { props.value && renderValue(props.size, props.value) }  
        </TooltipWrapper>

             
    </div>
);

GameIcon.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    value: PropTypes.number
};

export { GameIcon };