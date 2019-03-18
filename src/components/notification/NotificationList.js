import React from 'react';
import PropTypes from 'prop-types';

import NotificationListItem from './NotificationListItem';

const renderList = notifications => (
    <div>
        {notifications.map(notification => renderListItem(notification))}
    </div>
);

const renderListItem = notification => (
    <div key={notification.id}>
        <NotificationListItem notification={notification} />
    </div>
);

const NotificationList = (props) => (
    <div>
        <h5 className="m-4">Turn {props.turnDisplayed} notifications</h5>
        <button 
            className="ml-4 btn btn-light" 
            style={{width: 100}}
            disabled={props.turnDisplayed <= 1}
            onClick={() => props.displayTurnNotifications(props.turnDisplayed - 1)}>
            Previous
        </button> 
        <button 
            className="ml-2 btn btn-light" 
            style={{width: 100}}
            disabled={props.turnDisplayed === props.currentTurn - 1}
            onClick={() => props.displayTurnNotifications(props.turnDisplayed + 1)}>
            Next
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