import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { doResearch } from '../../actions/actionActions';
import ResearchListItem from './ResearchListItem';
import { Translate } from 'react-localize-redux';

const filterResearch = (actionable, clan) => {
    if (actionable) {
        return clan.research.filter(research => !research.completed && research.details.informationLevel <= clan.informationLevel)
    } else {
        return clan.research.filter(research => research.completed)
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
    <div>
        { renderList(filterResearch(props.actionable, props.clan), props.selectedCharacter, props.doResearch, props.actionable) }
        { props.actionable && <Translate id="labels.lockedResearch" 
            data={{ count: props.clan.research.filter(r => !r.completed && r.details.informationLevel > props.clan.informationLevel).length }}/>}
    </div>
    
);

ResearchList.propTypes = {
    clan: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    actionable: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const clan = state.clan.clan;
    const selectedCharacter = state.clan.selectedCharacter;

    return { clan, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        doResearch
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ResearchList);