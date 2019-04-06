import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import QuestListItem from './QuestListItem';

const renderList = (quests, selectedCharacter, goOnQuest) => (
    <div>
        {quests.map(quest => renderListItem(quest, selectedCharacter, goOnQuest))}
    </div>
);

const renderListItem = (quest, selectedCharacter, goOnQuest) => (
    <div key={quest.id}>
        <QuestListItem quest={quest} selectedCharacter={selectedCharacter} goOnQuest={goOnQuest} />
    </div>
);

const QuestList = (props) => (
    <div>
        { props.quests.length ? 
            renderList(props.quests, props.selectedCharacter, props.goOnQuest)
            : <div>
                 <Translate id="labels.noQuests" />
            </div>
        }
    </div>
);

QuestList.propTypes = {
    quests: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    goOnQuest: PropTypes.func.isRequired
};

export default QuestList;