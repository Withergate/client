import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NotificationList from './notification/NotificationList';
import { Error } from './shared/Error';
import spinner from '../images/spinner.gif';

import { 
    fetchNotifications,
    displayTurnNotifications,
    fetchGlobalNotification 
} from '../actions/dataActions';
import { GlobalNotification } from './notification/GlobalNotification';
import DisasterMiniPanel from './disaster/DisasterMiniPanel';
import EndGameInfoPanel from './clan/EndGameInfoPanel';
import { isToday } from '../services/timeUtils';
import Achievement from './profile/Achievement';
import { SMALL, INGAME } from '../constants/constants';
import { Translate } from 'react-localize-redux';

const getNewAchievements = (profile) => {
    return profile.achievements.filter(a => isToday(a.date));
}

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchNotifications(this.props.turnDisplayed);
        this.props.fetchGlobalNotification(INGAME);
    }

    render() {
        return (
            <div>
                {
                    this.props.failed && <Error error={this.props.error} />
                }
                {
                    this.props.global.fetched && this.props.global.INGAME.active &&
                        <div className="m-3">
                            <GlobalNotification
                                message={this.props.global.INGAME.message}
                                link={this.props.global.INGAME.link}
                                linkText={this.props.global.INGAME.linkText} />
                        </div>
                }
                {
                    <DisasterMiniPanel />
                }
                {
                    this.props.fetched && 
                        <div>
                            {
                                (this.props.turn.turnId > this.props.maxTurns) &&
                                <EndGameInfoPanel />
                            }
                            <NotificationList 
                                notifications={this.props.notifications} 
                                currentTurn={this.props.turn.turnId}
                                turnDisplayed={this.props.turnDisplayed}
                                displayTurnNotifications={this.props.displayTurnNotifications} />
                            { getNewAchievements(this.props.profile).length > 0 &&
                                <span className="ml-4 inline">
                                    <b><Translate id="profile.newAchievements" />: </b>
                                    { getNewAchievements(this.props.profile).map(a => 
                                        <span className="ml-3" key={a.id}>
                                            <Achievement achievement={a} size={SMALL} />
                                        </span>)
                                    }
                                </span>
                            }
                        </div>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        );
    }
}

HomePage.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    notifications: PropTypes.array.isRequired,
    turnDisplayed: PropTypes.number.isRequired,
    turn: PropTypes.object.isRequired,
    maxTurns: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { error, notifications, global } = state.notifications;
    const { turnDisplayed, turn } = state.turn;
    const { maxTurns } = state.game.properties;
    const profile = state.profile.profile.data;

    const fetching = state.turn.fetching || state.notifications.fetching;
    const fetched = state.turn.fetched && state.notifications.fetched;
    const failed = state.turn.failed || state.notifications.failed;

    return { fetching, fetched, failed, error, notifications, turnDisplayed, turn, global, maxTurns, profile };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchNotifications, displayTurnNotifications, fetchGlobalNotification }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
