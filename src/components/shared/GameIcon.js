import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { 
    FOOD, JUNK, INFORMATION, ITEM_CHANCE, SMALL, LARGE, CAPS, FAME,
    HEALING, INJURY, INJURY_INFO, EXPERIENCE, DEATH, COMBAT, SCAVENGE, CRAFTSMANSHIP, INTELLECT, ENCOUNTER, COMBAT_ROLL, WEAPON_ROLL,
    HEALTH, EXPERIENCE_STAT, SKILLPOINT, ITEM,FACTION_POINTS, ARMOR, ROLL, SILVER, GOLD, ACH_COMMON, ACH_RARE, ACH_EPIC, COMBAT_TOTAL,
    CRAFTSMANSHIP_LOW, INTELLECT_LOW
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
import combatTotalIcon from '../../images/combatTotal.png';
import armorIcon from '../../images/armor.png';
import scavengeIcon from '../../images/scavenge.png';
import craftsmanshipIcon from '../../images/craftsmanship.png';
import intellectIcon from '../../images/intellect.png';
import encounterIcon from '../../images/encounter.png';
import healthIcon from '../../images/health.png';
import experienceStatIcon from '../../images/experienceStat.png';
import skillpointIcon from '../../images/skillpoint.png';
import factionIcon from '../../images/faction.png';
import rollIcon from '../../images/roll.png';
import premiumSilverIcon from '../../images/premium-silver.png';
import premiumGoldIcon from '../../images/premium-gold.png';
import achCommonIcon from '../../images/achievement-common.png';
import achRareIcon from '../../images/achievement-rare.png';
import achEpicIcon from '../../images/achievement-epic.png';

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
        case COMBAT_TOTAL: return combatTotalIcon;
        case COMBAT_ROLL: return combatIcon;
        case WEAPON_ROLL: return combatTotalIcon;
        case ARMOR: return armorIcon;
        case SCAVENGE: return scavengeIcon;
        case CRAFTSMANSHIP: return craftsmanshipIcon;
        case CRAFTSMANSHIP_LOW: return craftsmanshipIcon;
        case INTELLECT: return intellectIcon;
        case INTELLECT_LOW: return intellectIcon;
        case HEALTH: return healthIcon;
        case EXPERIENCE_STAT: return experienceStatIcon;
        case SKILLPOINT: return skillpointIcon;
        case ENCOUNTER: return encounterIcon;
        case ITEM: return itemIcon;
        case FACTION_POINTS: return factionIcon;
        case ROLL: return rollIcon;
        case SILVER: return premiumSilverIcon;
        case GOLD: return premiumGoldIcon;
        case ACH_COMMON: return achCommonIcon;
        case ACH_RARE: return achRareIcon;
        case ACH_EPIC: return achEpicIcon;
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
        case COMBAT_TOTAL: return "basic.combatTotal";
        case COMBAT_ROLL: return "basic.combatRoll";
        case WEAPON_ROLL: return "basic.weaponRoll";
        case ARMOR: return "basic.armor";
        case SCAVENGE: return "basic.scavenge";
        case CRAFTSMANSHIP: return "basic.craftsmanship";
        case CRAFTSMANSHIP_LOW: return "basic.craftsmanshipLow";
        case INTELLECT: return "basic.intellect";
        case INTELLECT_LOW: return "basic.intellectLow";
        case HEALTH: return "basic.health";
        case EXPERIENCE_STAT: return "basic.experience";
        case SKILLPOINT: return "labels.skillpoint";
        case ENCOUNTER: return "labels.encounterChance";
        case ITEM: return "basic.item";
        case FACTION_POINTS: return "basic.factionPoints";
        case ROLL: return "basic.roll";
        case SILVER: return "basic.SILVER";
        case GOLD: return "basic.GOLD";
        case ACH_COMMON: return "profile.achievementCommon";
        case ACH_RARE: return "profile.achievementRare";
        case ACH_EPIC: return "profile.achievementEpic";
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
        <TooltipWrapper textKey={getTranslationKey(props.type)} place={props.place}>
            <Image height={props.size === LARGE ? "25px" : "20px"} src={getIconSource(props.type)} className="mr-1"/>
            { props.value !== undefined && renderValue(props.size, props.value) }  
        </TooltipWrapper>

             
    </div>
);

GameIcon.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    value: PropTypes.any,
    noPadding: PropTypes.bool,
    place: PropTypes.string
};

export { GameIcon };