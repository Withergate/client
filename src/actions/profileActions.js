import { fetchProfile, createProfile } from '../services/profileService';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED';
export const FETCH_PROFILE_REJECTED = 'FETCH_PROFILE_REJECTED';

export const CREATE_PROFILE = 'CREATE_PROFILE';
export const CREATE_PROFILE_PENDING = 'CREATE_PROFILE_PENDING';
export const CREATE_PROFILE_FULFILLED = 'CREATE_PROFILE_FULFILLED';
export const CREATE_PROFILE_REJECTED = 'CREATE_PROFILE_REJECTED';

const fetchProfileAction = () => ({
    type: FETCH_PROFILE,
    payload: fetchProfile()
});
export { fetchProfileAction as fetchProfile };

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
