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
import information from '../../images/information.png';

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
            { notification.header && <b>{notification.header}</b> }
            <div className="float-right">
                { notification.junkIncome !== 0 && <span><b>{notification.junkIncome}</b> <img height="20" src={junk} alt="" /> </span> }
                { notification.foodIncome !== 0 && <span><b>{notification.foodIncome}</b> <img height="20" src={food} alt="" /> </span> }
                { notification.capsIncome !== 0 && <span><b>{notification.capsIncome}</b> <img height="20" src={caps} alt="" /> </span> }
                { notification.fameIncome !== 0 && <span><b>{notification.fameIncome}</b> <img height="20" src={fame} alt="" /> </span> }
                { notification.injury !== 0 && <span><b>{notification.injury}</b> <img height="20" src={injury} alt="" /> </span> }
                { notification.healing !== 0 && <span><b>{notification.healing}</b> <img height="20" src={healing} alt="" /> </span> }
                { notification.experience !== 0 && <span><b>{notification.experience}</b> <img height="20" src={experience} alt="" /> </span> }
                { notification.information !== 0 && <span><b>{notification.information}</b> <img height="20" src={information} alt="" /> </span> }
            </div>
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