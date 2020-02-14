import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Table } from 'react-bootstrap';

import { Error } from '../shared/Error';
import { Paginator } from '../shared/Paginator';
import spinner from '../../images/spinner.gif';

import { fetchProfiles } from '../../actions/profileActions';
import { dismissError } from '../../actions/uiActions';
import { GameIcon } from '../shared/GameIcon';
import { SMALL } from '../../constants/constants';

class ProfileLadder extends Component {

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchProfiles(this.props.profiles.number);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && 
                    <div>
                        <Paginator
                            number={this.props.profiles.number}
                            max={this.props.profiles.totalPages - 1}
                            min={0}
                            onNext={this.props.fetchProfiles}
                            onPrevious={this.props.fetchProfiles}>
                            <Translate id="labels.page" /> {this.props.profiles.number + 1}
                        </Paginator>
                        <Table className="mt-4" striped borderless hover responsive>
                            <thead>
                                <tr>
                                    <th><Translate id="basic.name" /></th>
                                    <th><Translate id="profile.score" /></th>
                                    <th><Translate id="profile.numGames" /></th>
                                    <th><Translate id="labels.lastActivity" /></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.profiles.content.map(profile =>
                                    <tr key={profile.id} className={profile.id === this.props.clanId ? "text-success" : ""}>
                                        <td>
                                            {profile.name}
                                        </td>
                                        <td>{profile.ranking}</td>
                                        <td>{profile.numGames}</td>
                                        <td>{profile.lastActivity.replace('T', ' ').substring(0, 16)}</td>
                                        <td>
                                            { profile.premiumType &&
                                                <GameIcon type={profile.premiumType} size={SMALL} noPadding />
                                            }
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        );
    }
}

ProfileLadder.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    profiles: PropTypes.object.isRequired,
    clanId: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error } = state.profile.profiles;
    const profiles = state.profile.profiles.data;
    const clanId = state.clan.clan.id;

    return { fetching, fetched, failed, error, profiles, clanId };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchProfiles, dismissError }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLadder);