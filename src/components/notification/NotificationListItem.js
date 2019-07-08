import React from 'react';
import PropTypes from 'prop-types';

import { getTranslatedText } from '../../translations/translationUtils';

import junk from '../../images/junk.png';
import food from '../../images/food.png';
import caps from '../../images/caps.png';
import fame from '../../images/fame.png';
import injury from '../../images/injury.png';
import healing from '../../images/healing.png';
import experience from '../../images/experience.png';
import information from '../../images/information.png';
import { Card, Row, Col, Image } from 'react-bootstrap';

const renderDetail = detail => (
    <li key={detail.id}><small>{getTranslatedText(detail.text)}</small></li>
);

const NotificationListItem = ({notification}) => (
    <Card className="m-4">
        <Card.Body>
            <Card.Title>
                { notification.header && <b>{notification.header}</b> }
                <small className="float-right">
                    { notification.junkIncome !== 0 && <span><b>{notification.junkIncome}</b> <img height="20" src={junk} alt="" /> </span> }
                    { notification.foodIncome !== 0 && <span><b>{notification.foodIncome}</b> <img height="20" src={food} alt="" /> </span> }
                    { notification.capsIncome !== 0 && <span><b>{notification.capsIncome}</b> <img height="20" src={caps} alt="" /> </span> }
                    { notification.fameIncome !== 0 && <span><b>{notification.fameIncome}</b> <img height="20" src={fame} alt="" /> </span> }
                    { notification.injury !== 0 && <span><b>{notification.injury}</b> <img height="20" src={injury} alt="" /> </span> }
                    { notification.healing !== 0 && <span><b>{notification.healing}</b> <img height="20" src={healing} alt="" /> </span> }
                    { notification.experience !== 0 && <span><b>{notification.experience}</b> <img height="20" src={experience} alt="" /> </span> }
                    { notification.information !== 0 && <span><b>{notification.information}</b> <img height="20" src={information} alt="" /> </span> }
                </small>
            </Card.Title>            
            <Row>
                    {   notification.imageUrl &&
                        <Col md={1}>
                         <Image align="left" width="70px" src={notification.imageUrl} />
                        </Col>
                    }
                <Col>
                    { getTranslatedText(notification.text) }
                    {
                        notification.details.length > 0 && 
                        <ul className="mt-2">
                            {notification.details.map(detail => renderDetail(detail))}
                        </ul>
                    }
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

NotificationListItem.propTypes = {
    notification: PropTypes.object.isRequired
};

export default NotificationListItem;