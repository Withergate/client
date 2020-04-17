import { fetchProfile, createProfile, changeTheme, fetchProfiles, fetchHistoricalResults, fetchAvailableAchievements, changeProfileSettings } from '../services/profileService';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED';
export const FETCH_PROFILE_REJECTED = 'FETCH_PROFILE_REJECTED';

export const FETCH_PROFILES = 'FETCH_PROFILES';
export const FETCH_PROFILES_PENDING = 'FETCH_PROFILES_PENDING';
export const FETCH_PROFILES_FULFILLED = 'FETCH_PROFILES_FULFILLED';
export const FETCH_PROFILES_REJECTED = 'FETCH_PROFILES_REJECTED';

export const FETCH_PROFILE_RESULTS = 'FETCH_PROFILE_RESULTS';
export const FETCH_PROFILE_RESULTS_PENDING = 'FETCH_PROFILE_RESULTS_PENDING';
export const FETCH_PROFILE_RESULTS_FULFILLED = 'FETCH_PROFILE_RESULTS_FULFILLED';
export const FETCH_PROFILE_RESULTS_REJECTED = 'FETCH_PROFILE_RESULTS_REJECTED';

export const CREATE_PROFILE = 'CREATE_PROFILE';
export const CREATE_PROFILE_PENDING = 'CREATE_PROFILE_PENDING';
export const CREATE_PROFILE_FULFILLED = 'CREATE_PROFILE_FULFILLED';
export const CREATE_PROFILE_REJECTED = 'CREATE_PROFILE_REJECTED';

export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_PROFILE_SETTINGS = 'CHANGE_PROFILE_SETTINGS';

export const FETCH_ACHIEVEMENTS = 'FETCH_ACHIEVEMENTS';
export const FETCH_ACHIEVEMENTS_PENDING = 'FETCH_ACHIEVEMENTS_PENDING';
export const FETCH_ACHIEVEMENTS_FULFILLED = 'FETCH_ACHIEVEMENTS_FULFILLED';
export const FETCH_ACHIEVEMENTS_REJECTED = 'FETCH_ACHIEVEMENTS_REJECTED';

const fetchProfileAction = () => ({
    type: FETCH_PROFILE,
    payload: fetchProfile()
});
export { fetchProfileAction as fetchProfile };

const fetchProfilesAction = (number) => ({
    type: FETCH_PROFILES,
    payload: fetchProfiles(number)
});
export { fetchProfilesAction as fetchProfiles };

const fetchProfileResultsAction = (number) => ({
    type: FETCH_PROFILE_RESULTS,
    payload: fetchHistoricalResults(number)
});
export { fetchProfileResultsAction as fetchProfileResults };

const createProfileAction = (name) => {
    return (dispatch) => {
        return dispatch({
            type: CREATE_PROFILE,
            payload: createProfile(name)
        }).then(() => dispatch({
            type: FETCH_PROFILE,
            payload: fetchProfile()
        }));
    };
};
export { createProfileAction as createProfile };

const changeThemeAction = (theme) => {
    return (dispatch) => {
        return dispatch({
            type: CHANGE_THEME,
            payload: changeTheme(theme)
        }).then(() => dispatch({
            type: FETCH_PROFILE,
            payload: fetchProfile()
        }));
    };
};
export { changeThemeAction as changeTheme };

const changeProfileSettingsAction = (help) => {
    return (dispatch) => {
        return dispatch({
            type: CHANGE_PROFILE_SETTINGS,
            payload: changeProfileSettings(help)
        }).then(() => dispatch({
            type: FETCH_PROFILE,
            payload: fetchProfile()
        }));
    };
};
export { changeProfileSettingsAction as changeProfileSettings };

const fetchAchievementsAction = () => ({
    type: FETCH_ACHIEVEMENTS,
    payload: fetchAvailableAchievements()
});
export { fetchAchievementsAction as fetchAchievements };
