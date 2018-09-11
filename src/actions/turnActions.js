import { fetchTurn } from '../services/turnService';
import { fetchNotifications } from './notificationActions';

export const FETCH_TURN = 'FETCH_TURN';
export const FETCH_TURN_PENDING = 'FETCH_TURN_PENDING';
export const FETCH_TURN_FULFILLED = 'FETCH_TURN_FULFILLED';
export const FETCH_TURN_REJECTED = 'FETCH_TURN_REJECTED';

export const DISPLAY_TURN_NOTIFICATIONS = 'DISPLAY_TURN_NOTIFICATIONS';

const fetchTurnAction = () => ({
    type: FETCH_TURN,
    payload: fetchTurn()
});

export { fetchTurnAction as fetchTurn };

const displayTurnNotificationsAction = (turn) => {
    return (dispatch) => {
        return dispatch(fetchNotifications(turn))
        .then(() => dispatch({
            type: DISPLAY_TURN_NOTIFICATIONS,
            payload: turn
        }));
    };
};


export { displayTurnNotificationsAction as displayTurnNotifications };
