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

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchNotifications(this.props.turnDisplayed);
        this.props.fetchGlobalNotification();
    }

    render() {
        return (
            <div>
                {
                    this.props.failed && <Error message={this.props.error} />
                }
                {
                    this.props.global.fetched && this.props.global.active &&
                        <GlobalNotification message={this.props.global.message} />
                }
                {
                    <DisasterMiniPanel />
                }
                {
                    this.props.fetched && 
                        <NotificationList 
                            notifications={this.props.notifications} 
                            currentTurn={this.props.turn.turnId}
                            turnDisplayed={this.props.turnDisplayed}
                            displayTurnNotifications={this.props.displayTurnNotifications} />
                    }
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
    turnDisplayed: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const { error, notifications, global } = state.notifications;
    const { turnDisplayed, turn } = state.turn;

    const fetching = state.turn.fetching || state.notifications.fetching;
    const fetched = state.turn.fetched && state.notifications.fetched;
    const failed = state.turn.failed || state.notifications.failed;

    return { fetching, fetched, failed, error, notifications, turnDisplayed, turn, global };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchNotifications, displayTurnNotifications, fetchGlobalNotification }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
