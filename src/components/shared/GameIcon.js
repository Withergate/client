import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { 
    FOOD, JUNK, INFORMATION, ITEM_CHANCE, SMALL, LARGE, CAPS, FAME,
    HEALING, INJURY, INJURY_INFO, EXPERIENCE, DEATH, COMBAT, SCAVENGE, CRAFTSMANSHIP, INTELLECT, ENCOUNTER, LOGOUT,
    HEALTH, EXPERIENCE_STAT, SKILLPOINT, ITEM
 } from '../../constants/constants';

import junkIcon from '../../images/junk.png';
import foodIcon from '../../images/food.png';
import capsIcon from '../../images/caps.png';
import fameIcon from '../../images/fame.png';
import informationIcon from '../../images/information.png'
import itemIcon from '../../images/item.png';
import injuryIcon from '../../images/injury.png';
import healingIcon from '../../images/healing.png';
import experienceIcon from '../../images/experience.png';
import deathIcon from '../../images/death.png';
import combatIcon from '../../images/combat.png';
import scavengeIcon from '../../images/scavenge.png';
import craftsmanshipIcon from '../../images/craftsmanship.png';
import intellectIcon from '../../images/intellect.png';
import encounterIcon from '../../images/encounter.png';
import logoutIcon from '../../images/logout.png';
import healthIcon from '../../images/health.png';
import experienceStatIcon from '../../images/experienceStat.png';
import skillpointIcon from '../../images/skillpoint.png';

import TooltipWrapper from './TooltipWrapper';

const getIconSource = (type) => {
    switch (type) {
        case FOOD: return foodIcon;
        case JUNK: return junkIcon;
        case CAPS: return capsIcon;
        case FAME: return fameIcon;
        case INFORMATION: return informationIcon;
        case ITEM_CHANCE: return itemIcon;
        case INJURY: return injuryIcon;
        case INJURY_INFO: return injuryIcon;
        case HEALING: return healingIcon;
        case EXPERIENCE: return experienceIcon;
        case DEATH: return deathIcon;
        case COMBAT: return combatIcon;
        case SCAVENGE: return scavengeIcon;
        case CRAFTSMANSHIP: return craftsmanshipIcon;
        case INTELLECT: return intellectIcon;
        case HEALTH: return healthIcon;
        case EXPERIENCE_STAT: return experienceStatIcon;
        case SKILLPOINT: return skillpointIcon;
        case ENCOUNTER: return encounterIcon;
        case LOGOUT: return logoutIcon;
        case ITEM: return itemIcon;
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
        case INJURY: return "basic.injury";
        case INJURY_INFO: return "labels.injuryInfo";
        case HEALING: return "basic.healing";
        case EXPERIENCE: return "basic.experience";
        case DEATH: return "basic.death";
        case COMBAT: return "basic.combat";
        case SCAVENGE: return "basic.scavenge";
        case CRAFTSMANSHIP: return "basic.craftsmanship";
        case INTELLECT: return "basic.intellect";
        case HEALTH: return "basic.health";
        case EXPERIENCE_STAT: return "basic.experience";
        case SKILLPOINT: return "labels.skillpoint";
        case ENCOUNTER: return "labels.encounterChance";
        case LOGOUT: return "header.logout";
        case ITEM: return "basic.item";
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
    <div className={props.noPadding ? "" : "mr-1 ml-1"}>
        <TooltipWrapper textKey={getTranslationKey(props.type)}>
            <Image height={props.size === LARGE ? "25px" : "20px"} src={getIconSource(props.type)} className="mr-1"/>
            { props.value !== undefined && renderValue(props.size, props.value) }  
        </TooltipWrapper>

             
    </div>
);

GameIcon.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    value: PropTypes.any,
    noPadding: PropTypes.bool
};

export { GameIcon };