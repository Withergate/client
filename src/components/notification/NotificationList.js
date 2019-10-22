import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import NotificationListItem from './NotificationListItem';
import { Paginator } from '../shared/Paginator';
import Tutorial from './Tutorial';

const renderList = notifications => (
    <div>
        {
            notifications.map(notification => renderListItem(notification))
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
            <Paginator
                number={props.turnDisplayed}
                max={props.currentTurn - 1}
                min={0}
                onNext={props.displayTurnNotifications}
                onPrevious={props.displayTurnNotifications}>
                <Translate id="header.turn" /> {props.turnDisplayed}
            </Paginator>
        </div>
        { props.notifications.length ? 
            renderList(props.notifications)
            : <div className="m-4">
                <Translate id="labels.noNotifications" />
                <Tutorial />
            </div>
        } 
    </div>
);

NotificationList.propTypes = {
    notifications: PropTypes.array.isRequired,
    currentTurn: PropTypes.number.isRequired,
    turnDisplayed: PropTypes.number.isRequired,
    displayTurnNotifications: PropTypes.func.isRequired
};

export default NotificationList;