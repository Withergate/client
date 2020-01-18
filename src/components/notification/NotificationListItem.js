import React from 'react';
import PropTypes from 'prop-types';

import { getTranslatedText } from '../../translations/translationUtils';

import { Card, Row, Col, Image, Collapse, Button } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { JUNK, LARGE, FOOD, CAPS, FAME, INJURY, HEALING, EXPERIENCE, INFORMATION, DEATH, ITEM, FACTION_POINTS } from '../../constants/constants';
import { Translate } from 'react-localize-redux';

const renderDetail = detail => (
    <li key={detail.id}><small>{getTranslatedText(detail.text)}</small></li>
);

class NotificationListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            open: false
        };

        this.handleCollapseChange.bind(this);
    }

    handleCollapseChange(value) {
        this.setState({ 
            open: value
        });
    }

    render() {
        const notification = this.props.notification;

        return (<Card className="m-4">
            <Card.Body>
                <Row>
                    <Col>
                        { notification.header && <b>{notification.header}</b> }
                        <small className="float-right icon-row">
                            <ul className="list-inline">
                                { notification.foodIncome !== 0 && <li className="list-inline-item"><GameIcon type={FOOD} value={notification.foodIncome} size={LARGE} noPadding={true} /></li> }
                                { notification.junkIncome !== 0 && <li className="list-inline-item"><GameIcon type={JUNK} value={notification.junkIncome} size={LARGE} noPadding={true} /></li> }
                                { notification.capsIncome !== 0 && <li className="list-inline-item"><GameIcon type={CAPS} value={notification.capsIncome} size={LARGE} noPadding={true} /></li> }
                                { notification.fameIncome !== 0 && <li className="list-inline-item"><GameIcon type={FAME} value={notification.fameIncome} size={LARGE} noPadding={true} /></li> }
                                { notification.injury !== 0 && <li className="list-inline-item"><GameIcon type={INJURY} value={notification.injury} size={LARGE} noPadding={true} /></li> }
                                { notification.healing !== 0 && <li className="list-inline-item"><GameIcon type={HEALING} value={notification.healing} size={LARGE} noPadding={true} /></li> }
                                { notification.experience !== 0 && <li className="list-inline-item"><GameIcon type={EXPERIENCE} value={notification.experience} size={LARGE} noPadding={true} /></li> }
                                { notification.information !== 0 && <li className="list-inline-item"><GameIcon type={INFORMATION} value={notification.information} size={LARGE} noPadding={true} /></li> }
                                { notification.factionPoints !== 0 && <li className="list-inline-item"><GameIcon type={FACTION_POINTS} value={notification.factionPoints} size={LARGE} noPadding={true} /></li> }
                                { notification.death && <li className="list-inline-item"><GameIcon type={DEATH} size={LARGE} noPadding={true} /></li> }
                                { notification.item && <li className="list-inline-item"><GameIcon type={ITEM} size={LARGE} noPadding={true} /></li> }
                            </ul>
                        </small>
                    </Col>
                </Row>
                <Row>
                    { notification.imageUrl &&
                        <Col md={1} className="mb-2">
                            <Image width="60px" src={notification.imageUrl} />
                        </Col>
                    }
                    <Col md={11}>
                        { 
                            getTranslatedText(notification.text) &&
                            getTranslatedText(notification.text).split("\n").map((text, index) => <p key={notification.id + "i" + index}>{text}</p>)
                        }

                    </Col>
                </Row>
            </Card.Body>
            {
                notification.details.length > 0 &&
                    <Card.Footer>
                        <Button
                            variant="outline-dark" size="sm"
                            className="button-small mb-2"
                            onClick={() => this.handleCollapseChange(!this.state.open)}>
                                {
                                    this.state.open ?
                                        <Translate id="labels.closeDetails" />
                                        : <Translate id="labels.openDetails" />
                                }
                        </Button>
                        <Collapse in={this.state.open}>
                            <ul>
                                {notification.details.map(detail => renderDetail(detail))}
                            </ul>
                        </Collapse>
                    </Card.Footer>
            }
        </Card>
    )}
}

NotificationListItem.propTypes = {
    notification: PropTypes.object.isRequired
};

export default NotificationListItem;