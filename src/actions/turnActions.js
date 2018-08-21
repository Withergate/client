import { fetchTurn } from '../services/turnService';

export const FETCH_TURN = 'FETCH_TURN';
export const FETCH_TURN_PENDING = 'FETCH_TURN_PENDING';
export const FETCH_TURN_FULFILLED = 'FETCH_TURN_FULFILLED';
export const FETCH_TURN_REJECTED = 'FETCH_TURN_REJECTED';

const fetchTurnAction = () => ({
    type: FETCH_TURN,
    payload: fetchTurn()
});

export { fetchTurnAction as fetchTurn };
