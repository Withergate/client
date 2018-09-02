import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NotificationList from './notification/NotificationList';
import { Error } from './shared/Error';

import { fetchNotifications } from '../actions/notificationActions';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchNotifications(true);
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && 
                    <div>
                        <h5 className="m-4">Notifications</h5>
                        <NotificationList notifications={this.props.notifications} />
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

HomePage.propTypes = {
    fetchNotifications: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    notifications: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error, notifications } = state.notifications;

    return { fetching, fetched, failed, error, notifications };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchNotifications }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
