import { fetchPrincipal } from '../services/authService';
import { fetchClan } from './clanActions';

export const FETCH_PRINCIPAL = 'FETCH_PRINCIPAL';
export const FETCH_PRINCIPAL_PENDING = 'FETCH_PRINCIPAL_PENDING';
export const FETCH_PRINCIPAL_FULFILLED = 'FETCH_PRINCIPAL_FULFILLED';
export const FETCH_PRINCIPAL_REJECTED = 'FETCH_PRINCIPAL_REJECTED';

// fetch principal and clan once completed
const fetchPrincipalAction = () => {
    return (dispatch) => {
        return dispatch({
            type: FETCH_PRINCIPAL,
            payload: fetchPrincipal()
        }).then(() => dispatch(fetchClan()));
    };
};

export { fetchPrincipalAction as fetchPrincipal };