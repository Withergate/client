import { combineReducers } from 'redux';
import { AuthReducer } from './authReducer';
import { ClanReducer } from './clanReducer';
import { DataReducer } from './dataReducer';
import { TurnReducer } from './turnReducer';
import { NotificationReducer } from './notificationReducer';

export default combineReducers({
    auth: AuthReducer,
    clan: ClanReducer,
    turn: TurnReducer,
    notifications: NotificationReducer,
    data: DataReducer
});