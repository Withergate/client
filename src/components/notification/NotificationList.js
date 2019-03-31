import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import NotificationListItem from './NotificationListItem';

const renderList = notifications => (
    <div>
        {
            notifications.length ? notifications.map(notification => renderListItem(notification))
            : <div className="m-4">
                <Translate id="labels.noNotifications" />
            </div>
        }
    </div>
);

const renderListItem = notification => (
    <div key={notification.id}>
        <NotificationListItem notification={notification} />
    </div>
);

const NotificationList = (props) => (
    <div>
        <h5 className="m-4"><Translate id="header.turn" /> {props.turnDisplayed}</h5>
        <button 
            className="ml-4 btn btn-light" 
            style={{width: 100}}
            disabled={props.turnDisplayed <= 1}
            onClick={() => props.displayTurnNotifications(props.turnDisplayed - 1)}>
            <Translate id="labels.previous" />
        </button> 
        <button 
            className="ml-2 btn btn-light" 
            style={{width: 100}}
            disabled={props.turnDisplayed === props.currentTurn - 1}
            onClick={() => props.displayTurnNotifications(props.turnDisplayed + 1)}>
            <Translate id="labels.next" />
        </button>
        {renderList(props.notifications)} 
    </div>
);

NotificationList.propTypes = {
    notifications: PropTypes.array.isRequired,
    currentTurn: PropTypes.number.isRequired,
    turnDisplayed: PropTypes.number.isRequired,
    displayTurnNotifications: PropTypes.func.isRequired
};

export default NotificationList;