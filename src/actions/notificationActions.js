import { fetchNotifications } from '../services/notificationService';

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const FETCH_NOTIFICATIONS_PENDING = 'FETCH_NOTIFICATIONS_PENDING';
export const FETCH_NOTIFICATIONS_FULFILLED = 'FETCH_NOTIFICATIONS_FULFILLED';
export const FETCH_NOTIFICATIONS_REJECTED = 'FETCH_NOTIFICATIONS_REJECTED';

const fetchNotificationsAction = (currentTurnOnly) => ({
    type: FETCH_NOTIFICATIONS,
    payload: fetchNotifications(currentTurnOnly)
});

export { fetchNotificationsAction as fetchNotifications };