import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card, Image } from 'react-bootstrap';

const renderList = (quests) => (
    <div>
        {quests.map(quest => renderListItem(quest))}
    </div>
);

const renderListItem = (quest) => (
    <Card className="mb-4" key={quest.id}>
        <Card.Body>
            <Row>
                <Col md={2}>
                    <Image rounded src={quest.details.imageUrl} height="80px" alt="" />
                </Col>
                <Col md={10}>
                    <b>{getTranslatedText(quest.details.name)}</b>
                    <p>
                        {getTranslatedText(quest.details.description)}
                    </p>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

const QuestListCompleted = (props) => (
    <div>
        { props.quests.length ? 
            renderList(props.quests)
            : <Translate id="labels.noCompletedQuests" />
        }
    </div>
);

QuestListCompleted.propTypes = {
    quests: PropTypes.array.isRequired,
};

export default QuestListCompleted;