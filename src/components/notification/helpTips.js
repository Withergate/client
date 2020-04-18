export const getTips = (clan, turn) => {
    const tips = [];

    if (getBuildingsSum(clan) < 1) {
        tips.push("help.tips.noBuildings");
    }
    if (clan.food < 10) {
        tips.push("help.tips.lowFood");
    }
    if (getInjuriesSum(clan) > 1) {
        tips.push("help.tips.injuries");
    }

    return tips;
}

const getBuildingsSum = (clan) => {
    return clan.buildings.filter(b => b.level > 0).length;
}

const getInjuriesSum = (clan) => {
    return clan.characters.filter(ch => ch.hitpoints < ch.maxHitpoints).length;
}