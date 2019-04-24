export const SELECT_CLAN_TAB = 'SELECT_CLAN_TAB';
export const SELECT_ACTION_TAB = 'SELECT_ACTION_TAB';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';

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