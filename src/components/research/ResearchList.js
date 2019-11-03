import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { doResearch } from '../../actions/actionActions';
import ResearchListItem from './ResearchListItem';
import { Translate } from 'react-localize-redux';

const filterResearch = (actionable, research) => {
    if (actionable) {
        return research.filter(research => !research.completed)
    } else {
        return research.filter(research => research.completed)
    }
}

const renderList = (research, selectedCharacter, doResearch, actionable) => (
    <div>
        { 
            research.length ? 
            research.map(r => renderListItem(r, selectedCharacter, doResearch, actionable))
            : <Translate id="labels.noResearch" />
        }
    </div>
);

const renderListItem = (research, selectedCharacter, doResearch, actionable) => (
    <div key={research.id}>
        <ResearchListItem research={research} selectedCharacter={selectedCharacter} doResearch={doResearch} actionable={actionable} />
    </div>
);

const ResearchList = (props) => (
    renderList(filterResearch(props.actionable, props.research), props.selectedCharacter, props.doResearch, props.actionable)
);

ResearchList.propTypes = {
    research: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    actionable: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const research = state.clan.clan.research;
    const selectedCharacter = state.clan.selectedCharacter;

    return { research, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        doResearch
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ResearchList);