import { fetchPrincipal, restartGame, endTurn } from '../services/authService';
import { fetchClan } from './clanActions';

export const FETCH_PRINCIPAL = 'FETCH_PRINCIPAL';
export const FETCH_PRINCIPAL_PENDING = 'FETCH_PRINCIPAL_PENDING';
export const FETCH_PRINCIPAL_FULFILLED = 'FETCH_PRINCIPAL_FULFILLED';
export const FETCH_PRINCIPAL_REJECTED = 'FETCH_PRINCIPAL_REJECTED';

export const RESTART_GAME = 'RESTART_GAME';
export const RESTART_GAME_PENDING = 'RESTART_GAME_PENDING';
export const RESTART_GAME_FULFILLED = 'RESTART_GAME_FULFILLED';
export const RESTART_GAME_REJECTED = 'RESTART_GAME_REJECTED';

export const END_TURN = 'END_TURN';
export const END_TURN_PENDING = 'END_TURN_PENDING';
export const END_TURN_FULFILLED = 'END_TURN_FULFILLED';
export const END_TURN_REJECTED = 'END_TURN_REJECTED';

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

// action accessible only to administrators
const restartGameAction = () => {
    return (dispatch) => {
        return dispatch({
            type: RESTART_GAME,
            payload: restartGame()
        }).then(() => window.location.reload(true));
    };
};

export { restartGameAction as restartGame };

// action accessible only to administrators
const endTurnAction = () => {
    return (dispatch) => {
        return dispatch({
            type: END_TURN,
            payload: endTurn()
        }).then(() => window.location.reload(true));
    };
};

export { endTurnAction as endTurn };