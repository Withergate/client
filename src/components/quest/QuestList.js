import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";

import { goOnQuest } from '../../actions/actionActions';

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
            : <Translate id="labels.noQuests" />
        }
    </div>
);

QuestList.propTypes = {
    quests: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const quests = state.clan.clan.quests.filter(quest => !quest.completed)
    const selectedCharacter = state.clan.selectedCharacter;

    return { quests, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        goOnQuest
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestList);