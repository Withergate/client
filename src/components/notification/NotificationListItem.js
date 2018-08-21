import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

const NotificationListItem = ({notification}) => (
    <div className="p-2 m-2  row rounded bg-light">
        <div className="col">
            <small className="text-muted" >{notification.turnId} &nbsp;</small>
            {renderHTML(notification.text)}
        </div>
        
    </div>
);

NotificationListItem.propTypes = {
    notification: PropTypes.object.isRequired
};

export default NotificationListItem;