import React from 'react';
import PropTypes from 'prop-types';

import { toReactTranslate } from '../../translations/translationUtils';

import junk from '../../images/junk.png';
import food from '../../images/food.png';
import caps from '../../images/caps.png';
import fame from '../../images/fame.png';
import injury from '../../images/injury.png';
import healing from '../../images/healing.png';
import experience from '../../images/experience.png';

const renderDetail = detail => (
    <div key={detail.id}>
        <li><small>{toReactTranslate(getDetailText(detail))}</small></li>
    </div>
);

const getNotificationText = notification => (
    localStorage.getItem('lang') && notification && notification.text && notification.text[localStorage.getItem('lang')] ? 
        notification.text[localStorage.getItem('lang')].text
    : notification && notification.text && notification.text.en && notification.text.en.text
);

const getDetailText = detail => (
    localStorage.getItem('lang') && detail && detail.text && detail.text[localStorage.getItem('lang')] ? 
        detail.text[localStorage.getItem('lang')].text
    : detail && detail.text && detail.text.en && detail.text.en.text
);

const NotificationListItem = ({notification}) => (
    <div className="m-4 p-2 rounded bg-light">
        <div>
            { notification.junkIncome !== 0 && <span><b>{notification.junkIncome}</b> <img height="20" src={junk} alt="junk" /> </span> }
            { notification.foodIncome !== 0 && <span><b>{notification.foodIncome}</b> <img height="20" src={food} alt="food" /> </span> }
            { notification.capsIncome !== 0 && <span><b>{notification.capsIncome}</b> <img height="20" src={caps} alt="caps" /> </span> }
            { notification.fameIncome !== 0 && <span><b>{notification.fameIncome}</b> <img height="20" src={fame} alt="fame" /> </span> }
            { notification.injury !== 0 && <span><b>{notification.injury}</b> <img height="20" src={injury} alt="injury" /> </span> }
            { notification.healing !== 0 && <span><b>{notification.healing}</b> <img height="20" src={healing} alt="healing" /> </span> }
            { notification.experience !== 0 && <span><b>{notification.experience}</b> <img height="20" src={experience} alt="experience" /> </span> }
        </div>
        <div className="row p-3">
            {
                toReactTranslate(getNotificationText(notification))
            }
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