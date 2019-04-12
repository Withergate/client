import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col } from 'react-bootstrap';

import caps from '../../images/caps.png';
import fame from '../../images/fame.png';

const renderList = (quests) => (
    <div>
        {quests.map(quest => renderListItem(quest))}
    </div>
);

const renderListItem = (quest) => (
    <div key={quest.id}>
        <div className="mb-4 p-3 rounded bg-light" key={quest.id}>
            <Row>
                <Col md={2}>
                    <img src={quest.details.imageUrl} height="80px" alt="" />
                </Col>
                <Col md={10}>
                    <b>{getTranslatedText(quest.details.name)}</b>
                    <p className="mt-4">
                    <span><img height="20" src={caps} alt="" /> {quest.details.capsReward} </span>
                    <span><img height="20" src={fame} alt="" /> {quest.details.fameReward} </span>
                </p>
                </Col>
            </Row>
        </div>
    </div>
);

const QuestListCompleted = (props) => (
    <div>
        { props.quests.length ? 
            renderList(props.quests)
            : <div>
                 <Translate id="labels.noCompletedQuests" />
            </div>
        }
    </div>
);

QuestListCompleted.propTypes = {
    quests: PropTypes.array.isRequired,
};

export default QuestListCompleted;