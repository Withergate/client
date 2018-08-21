import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './components/Header';
import Main from './components/Main';
import LoginPage from './components/LoginPage';

import { fetchPrincipal } from './actions/authActions';
import { fetchTurn } from './actions/turnActions';
import { createClan } from './actions/clanActions';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPrincipal();
        this.props.fetchTurn();
    }

    render() {
        const { loggedIn, turn, exists, createClan } = this.props;
        
        return (
            <div>
                { 
                    loggedIn ? 
                        <BrowserRouter>
                            <div>
                                <Header turn={turn} />
                                <Main exists={exists} createClan={createClan} />
                            </div>
                        </BrowserRouter>
                        : <LoginPage />
                }
            </div>
        );
    }
}

App.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    turn: PropTypes.object.isRequired,
    fetchTurn: PropTypes.func.isRequired,
    fetchPrincipal: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired,
    exists: PropTypes.bool.isRequired,
    createClan: PropTypes.func.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { loggedIn } = state.auth;
    const { turn } = state.turn;
    const { exists } = state.clan;

    const fetching = state.auth.fetching || state.turn.fetching || state.clan.fetching;
    const fetched = state.auth.fetched && state.turn.fetched && state.clan.fetched;
    const failed = state.auth.failed || state.turn.failed || state.clan.failed;

    return { fetching, fetched, failed, loggedIn, turn, exists };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchPrincipal, fetchTurn, createClan }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
