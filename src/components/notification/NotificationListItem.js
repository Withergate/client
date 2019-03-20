import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

import junk from '../../images/junk.png';
import caps from '../../images/caps.png';
import fame from '../../images/fame.png';
import injury from '../../images/injury.png';
import healing from '../../images/healing.png';

const renderDetail = detail => (
    <div key={detail.id}>
        <li><small>{renderHTML(detail.text)}</small></li>
    </div>
);

const NotificationListItem = ({notification}) => (
    <div className="m-4 p-2 rounded bg-light">
        <div>
            { notification.junkIncome !== 0 && <span><b>{notification.junkIncome}</b> <img height="20" src={junk} alt="junk" /> </span> }
            { notification.capsIncome !== 0 && <span><b>{notification.capsIncome}</b> <img height="20" src={caps} alt="caps" /> </span> }
            { notification.fameIncome !== 0 && <span><b>{notification.fameIncome}</b> <img height="20" src={fame} alt="fame" /> </span> }
            { notification.injury !== 0 && <span><b>{notification.injury}</b> <img height="20" src={injury} alt="injury" /> </span> }
            { notification.healing !== 0 && <span><b>{notification.healing}</b> <img height="20" src={healing} alt="healing" /> </span> }
        </div>
        <div className="row p-3">
            
            {renderHTML(notification.text)}
            &nbsp;
            {notification.result !== null && renderHTML(notification.result)}
        </div>
        {
            notification.details.length > 0 && 
            <div className="row p-3">
                <ul>
                    {notification.details.map(detail => renderDetail(detail))}
                </ul>
            </div>
        }
    </div>
);

NotificationListItem.propTypes = {
    notification: PropTypes.object.isRequired
};

export default NotificationListItem;