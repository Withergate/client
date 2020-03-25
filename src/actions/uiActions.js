export const SELECT_CLAN_TAB = 'SELECT_CLAN_TAB';
export const SELECT_ACTION_TAB = 'SELECT_ACTION_TAB';
export const SELECT_LADDER_TAB = 'SELECT_LADDER_TAB';
export const SELECT_PROFILE_TAB = 'SELECT_PROFILE_TAB';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';
export const DISMISS_ERROR = 'DISMISS_ERROR';
export const CHANGE_CHARACTER_SORT_KEY = 'CHANGE_CHARACTER_SORT_KEY';
export const CHANGE_CHARACTER_SORT_DIRECTION = 'CHANGE_CHARACTER_SORT_DIRECTION';
export const CHANGE_BUILDING_SORT_KEY = 'CHANGE_BUILDING_SORT_KEY';
export const CHANGE_BUILDING_SORT_DIRECTION = 'CHANGE_BUILDING_SORT_DIRECTION';
export const CHANGE_ITEM_FILTER = 'CHANGE_ITEM_FILTER';
export const CHANGE_CLAN_OFFER_FILTER = 'CHANGE_CLAN_OFFER_FILTER';
export const CHANGE_MARKET_OFFER_FILTER = 'CHANGE_MARKET_OFFER_FILTER';
export const DISPLAY_CLAN_INTEL = 'DISPLAY_CLAN_INTEL';
export const DISPLAY_PROFILE_INTEL = 'DISPLAY_PROFILE_INTEL';

const selectClanTabAction = (tab) => ({
    type: SELECT_CLAN_TAB,
    payload: tab
});
export { selectClanTabAction as selectClanTab };

const selectActionTabAction = (tab) => ({
    type: SELECT_ACTION_TAB,
    payload: tab
});
export { selectActionTabAction as selectActionTab };

const selectLadderTabAction = (tab) => ({
    type: SELECT_LADDER_TAB,
    payload: tab
});
export { selectLadderTabAction as selectLadderTab };

const selectProfileTabAction = (tab) => ({
    type: SELECT_PROFILE_TAB,
    payload: tab
});
export { selectProfileTabAction as selectProfileTab };

const selectCharacterAction = (characterId) => ({
    type: SELECT_CHARACTER,
    payload: characterId
});
export { selectCharacterAction as selectCharacter };

const dismissErrorAction = () => ({
    type: DISMISS_ERROR
});
export { dismissErrorAction as dismissError };

const changeCharacterSortKeyAction = (key) => ({
    type: CHANGE_CHARACTER_SORT_KEY,
    payload: key
});
export { changeCharacterSortKeyAction as changeCharacterSortKey };

const changeCharacterSortDirectionAction = (direction) => ({
    type: CHANGE_CHARACTER_SORT_DIRECTION,
    payload: direction
});
export { changeCharacterSortDirectionAction as changeCharacterSortDirection };

const changeBuildingSortKeyAction = (key) => ({
    type: CHANGE_BUILDING_SORT_KEY,
    payload: key
});
export { changeBuildingSortKeyAction as changeBuildingSortKey };

const changeBuildingSortDirectionAction = (direction) => ({
    type: CHANGE_BUILDING_SORT_DIRECTION,
    payload: direction
});
export { changeBuildingSortDirectionAction as changeBuildingSortDirection };

const changeItemFilterAction = (filter) => ({
    type: CHANGE_ITEM_FILTER,
    payload: filter
});
export { changeItemFilterAction as changeItemFilter };

const changeClanOfferFilterAction = (filter) => ({
    type: CHANGE_CLAN_OFFER_FILTER,
    payload: filter
});
export { changeClanOfferFilterAction as changeClanOfferFilter };

const changeMarketOfferFilterAction = (filter) => ({
    type: CHANGE_MARKET_OFFER_FILTER,
    payload: filter
});
export { changeMarketOfferFilterAction as changeMarketOfferFilter };

const displayClanIntelAction = (displayed) => ({
    type: DISPLAY_CLAN_INTEL,
    payload: displayed
});
export { displayClanIntelAction as displayClanIntel };

const displayProfileIntelAction = (displayed) => ({
    type: DISPLAY_PROFILE_INTEL,
    payload: displayed
});
export { displayProfileIntelAction as displayProfileIntel };