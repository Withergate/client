import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import NotificationListItem from './NotificationListItem';
import { Paginator } from '../shared/Paginator';

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
        <div className="m-4">
            <h5><Translate id="header.turn" /> {props.turnDisplayed}</h5>
            <Paginator
                number={props.turnDisplayed}
                max={props.currentTurn - 1}
                min={1}
                onNext={props.displayTurnNotifications}
                onPrevious={props.displayTurnNotifications} />
        </div>
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