import React from 'react';
import PropTypes from 'prop-types';

import { getTranslatedText } from '../../translations/translationUtils';

import { Card, Row, Col, Image } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { JUNK, LARGE, FOOD, CAPS, FAME, INJURY, HEALING, EXPERIENCE, INFORMATION, DEATH } from '../../constants/constants';

const renderDetail = detail => (
    <li key={detail.id}><small>{getTranslatedText(detail.text)}</small></li>
);

const NotificationListItem = ({notification}) => (
    <Card className="m-4">
        <Card.Body>
                <Row>
                    <Col>
                    { notification.header && <b>{notification.header}</b> }
                    <small className="float-right">
                        <ul className="list-inline">
                        { notification.foodIncome !== 0 && <li className="list-inline-item"><GameIcon type={FOOD} value={notification.foodIncome} size={LARGE} noPadding={true} /></li> }
                        { notification.junkIncome !== 0 && <li className="list-inline-item"><GameIcon type={JUNK} value={notification.junkIncome} size={LARGE} noPadding={true} /></li> }
                        { notification.capsIncome !== 0 && <li className="list-inline-item"><GameIcon type={CAPS} value={notification.capsIncome} size={LARGE} noPadding={true} /></li> }
                        { notification.fameIncome !== 0 && <li className="list-inline-item"><GameIcon type={FAME} value={notification.fameIncome} size={LARGE} noPadding={true} /></li> }
                        { notification.injury !== 0 && <li className="list-inline-item"><GameIcon type={INJURY} value={notification.injury} size={LARGE} noPadding={true} /></li> }
                        { notification.healing !== 0 && <li className="list-inline-item"><GameIcon type={HEALING} value={notification.healing} size={LARGE} noPadding={true} /></li> }
                        { notification.experience !== 0 && <li className="list-inline-item"><GameIcon type={EXPERIENCE} value={notification.experience} size={LARGE} noPadding={true} /></li> }
                        { notification.information !== 0 && <li className="list-inline-item"><GameIcon type={INFORMATION} value={notification.information} size={LARGE} noPadding={true} /></li> }
                        { notification.death && <li className="list-inline-item"><GameIcon type={DEATH} size={LARGE} noPadding={true} /></li> }
                        </ul>
                    </small>
                    </Col>
                </Row>
            <Row>
                { notification.imageUrl &&
                    <Col md={1}>
                        <Image width="60px" src={notification.imageUrl} />
                    </Col>
                }
                <Col md={11}>
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