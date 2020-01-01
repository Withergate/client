import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFactions } from '../../actions/dataActions';
import { dismissError } from '../../actions/uiActions';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';
import FactionListItem from './FactionListItem';

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
                        {
                            this.props.factions.map(faction => 
                                <FactionListItem
                                    key={faction.identifier}
                                    faction={faction}
                                    selectedCharacter={this.props.selectedCharacter}
                                    joinFaction={() => console.log("Not implemented")} />
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
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const { selectedCharacter } = state.clan;
    const { clan } = state.clan.clan;
    const factions = state.data.factions.data;

    const { fetched, fetching, failed, error } = state.data.factions;

    return { fetching, fetched, failed, error, factions, clan, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchFactions,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FactionSelectorPanel);