import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CharacterList from './clan/CharacterList';
import ClanSummary from './clan/ClanSummary';
import { Error } from './shared/Error';

import { fetchClan } from '../actions/clanActions';

class ClanPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchClan();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && 
                    <div>
                        <ClanSummary clan={this.props.clan} />
                        <CharacterList characters={this.props.clan.characters} />
                    </div>
                }
                {
                    this.props.fetching && <div>Loading...</div>
                }
                {
                    this.props.failed && <Error message={this.props.error} />
                }
            </div>
        );
    }
}

ClanPage.propTypes = {
    fetchClan: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    clan: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error, clan } = state.clan;

    return { fetching, fetched, failed, error, clan };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchClan }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanPage);