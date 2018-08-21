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
        {renderList(props.notifications)}
    </div>
);

NotificationList.propTypes = {
    notifications: PropTypes.array.isRequired
};

export default NotificationList;