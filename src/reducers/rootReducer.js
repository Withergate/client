import { combineReducers } from 'redux';
import { AppReducer } from './appReducer';
import { AuthReducer } from './authReducer';
import { ClanReducer } from './clanReducer';
import { DataReducer } from './dataReducer';
import { TurnReducer } from './turnReducer';
import { ActionReducer } from './actionReducer';
import { NotificationReducer } from './notificationReducer';
import { UiReducer } from './uiReducer';

export default combineReducers({
    app: AppReducer,
    auth: AuthReducer,
    clan: ClanReducer,
    turn: TurnReducer,
    notifications: NotificationReducer,
    data: DataReducer,
    action: ActionReducer,
    ui: UiReducer
});