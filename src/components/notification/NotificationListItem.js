import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

const NotificationListItem = ({notification}) => (
    <div className="m-4 p-2 rounded bg-light">
        <div className="row p-3">
            {renderHTML(notification.text)}
            &nbsp;
            {notification.result !== null && renderHTML(notification.result)}
        </div>
        {
            notification.income !== null && 
            <div className="row p-3">
                <small>{renderHTML(notification.income)}</small>
            </div>
        }
        {
            notification.details !== null && 
            <div className="row p-3">
                <small className="text-muted">{renderHTML(notification.details)}</small>
            </div>
        }
    </div>
);

NotificationListItem.propTypes = {
    notification: PropTypes.object.isRequired
};

export default NotificationListItem;