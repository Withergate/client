export const getTips = (clan, turn, disaster) => {
    const tips = [];

    // end of game
    if (turn > 45) {
        return tips;
    }

    if (getBuildingsSum(clan) < 1) {
        tips.push("help.tips.noBuildings");
    }
    if (getConstructionSum(clan) > 2) {
        tips.push("help.tips.construction");
    }
    if (getResearchSum(clan) < 1 && turn > 8) {
        tips.push("help.tips.noResearch");
    }
    if (clan.food > 5 && clan.food < 10) {
        tips.push("help.tips.lowFood");
    }
    if (clan.food <= 5) {
        tips.push("help.tips.criticalFood");
    }
    if (clan.junk <= 5) {
        tips.push("help.tips.lowJunk");
    }
    if (getInjuriesSum(clan) > 1) {
        tips.push("help.tips.injuries");
    }
    if (clan.caps > 100 && turn < 40) {
        if (clan.characters.length < clan.populationLimit) {
            tips.push("help.tips.hireCharacter");
        } else {
            tips.push("help.tips.increasePopulation");
        } 
    }
    if (clan.characters.length < 5) {
        tips.push("help.tips.lowCharacters");
    }
    if (clan.fame >= 50 && clan.faction === null) {
        tips.push("help.tips.joinFaction");
    }
    if ((clan.informationLevel < 1 && turn > 10) || (clan.informationLevel < 2 && turn > 20)) {
        tips.push("help.tips.increaseInformation");
    }
    if (clan.items.length > 2) {
        tips.push("help.tips.unusedItems");
    }
    if (getSkillpointsSum(clan) > 1) {
        tips.push("help.tips.training");
    }
    if (getUnfinishedQuestsSum(clan) > 1) {
        tips.push("help.tips.finishQuests");
    }
    if (disaster && clan.disasterProgress < (100 - getRemaingDisasterTurns(turn, disaster) * 20)) {
        tips.push("help.tips.avertDisaster");
    }

    return tips;
}

const getBuildingsSum = (clan) => {
    return clan.buildings.filter(b => b.level > 0).length;
}

const getConstructionSum = (clan) => {
    return clan.buildings.filter(b => b.level < 1 && b.progress > 0).length;
}

const getResearchSum = (clan) => {
    return clan.research.filter(r => r.completed).length;
}

const getInjuriesSum = (clan) => {
    return clan.characters.filter(ch => ch.hitpoints < (ch.maxHitpoints * 2 / 3)).length;
}

const getSkillpointsSum = (clan) => {
    return clan.characters.filter(ch => ch.skillPoints > 0).length;
}

const getUnfinishedQuestsSum = (clan) => {
    return clan.quests.filter(q => !q.completed).length;
}
const getRemaingDisasterTurns = (turn, disaster) => {
    return disaster.turn + 1 - turn;
}