import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFactions } from '../../actions/dataActions';
import { handleFactionAction } from '../../actions/actionActions';
import { dismissError } from '../../actions/uiActions';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';
import FactionListItem from './FactionListItem';
import { Translate } from 'react-localize-redux';

class FactionSelectorPanel extends React.Component {
    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchFactions();
        }
    }

    render() {
        return ( 
            <div>
                {
                    this.props.fetched &&
                    <div>
                        <div className="mb-4">
                            <Translate id="factions.joinDescription" data={{ fame: this.props.properties.factionEntryFame }} />
                        </div>
                        {
                            this.props.factions.map(faction => 
                                <FactionListItem
                                    key={faction.identifier}
                                    faction={faction}
                                    selectedCharacter={this.props.selectedCharacter}
                                    joinFaction={() => this.props.handleFactionAction(this.props.selectedCharacter.id, "JOIN", faction.identifier)} />
                            )
                        }
                    </div>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        )
    }
};

FactionSelectorPanel.propTypes = {
    clan: PropTypes.object.isRequired,
    factions: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    properties: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { selectedCharacter } = state.clan;
    const { clan } = state.clan.clan;
    const factions = state.data.factions.data;
    const properties = state.game.properties;

    const { fetched, fetching, failed, error } = state.data.factions;

    return { fetching, fetched, failed, error, factions, clan, selectedCharacter, properties };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchFactions,
        dismissError,
        handleFactionAction
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FactionSelectorPanel);