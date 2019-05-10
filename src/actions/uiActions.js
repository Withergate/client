export const SELECT_CLAN_TAB = 'SELECT_CLAN_TAB';
export const SELECT_ACTION_TAB = 'SELECT_ACTION_TAB';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';
export const DISMISS_ERROR = 'DISMISS_ERROR';
export const CHANGE_CHARACTER_SORT_KEY = 'CHANGE_CHARACTER_SORT_KEY';
export const CHANGE_CHARACTER_SORT_DIRECTION = 'CHANGE_CHARACTER_SORT_DIRECTION';
export const CHANGE_ITEM_FILTER = 'CHANGE_ITEM_FILTER';
export const CHANGE_CLAN_OFFER_FILTER = 'CHANGE_CLAN_OFFER_FILTER';
export const CHANGE_MARKET_OFFER_FILTER = 'CHANGE_MARKET_OFFER_FILTER';

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

const selectedCharacterAction = (characterId) => ({
    type: SELECT_CHARACTER,
    payload: characterId
});
export { selectedCharacterAction as selectCharacter };

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