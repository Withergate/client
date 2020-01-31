import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LocalizeProvider } from "react-localize-redux";
import ReactGA from 'react-ga';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import { fetchPrincipal } from './actions/authActions';
import { fetchProfile } from './actions/profileActions';
import { dismissError } from './actions/uiActions';
import { fetchTurn, fetchVersion, fetchGameProperties } from './actions/dataActions';
import { createClan } from './actions/actionActions';
import { selectCharacter } from './actions/uiActions';
import { Alert } from 'react-bootstrap';

function initializeReactGA() {
    ReactGA.initialize('UA-151263839-1');
    ReactGA.pageview('/homepage');
}

class App extends Component {
    componentDidMount() {
        initializeReactGA();

        this.props.fetchPrincipal();
        this.props.fetchProfile();
        this.props.fetchTurn();
        this.props.fetchVersion();
        this.props.fetchGameProperties();
    }

    render() {
        const { 
            fetched,
            fetching,
            failed,
            error,
            loggedIn,
            turn, 
            clanExists,
            profileExists,
            createClan, 
            selectCharacter, 
            selectedCharacter, 
            clan, 
            version,
            principal,
            dismissError,
            maxTurns,
            turnTimes
        } = this.props;
        
        return (
            <div>
                { (window._env_.PROFILE === 'LOCAL' || window._env_.PROFILE === 'DEV') && 
                    <Alert variant="danger" className="m-0 p-2">
                        The application is running in {window._env_.PROFILE} profile. Database can be wiped anytime without warning!
                    </Alert>
                }
                <LocalizeProvider>
                    <BrowserRouter>
                        <div>
                            <Header
                                turn={turn}
                                maxTurns={maxTurns}
                                turnTimes={turnTimes}
                                principal={principal}
                                clan={clan}
                                loggedIn={loggedIn} />
                            <Main 
                                clanExists={clanExists}
                                profileExists={profileExists}
                                createClan={createClan}
                                clan={clan}
                                selectedCharacter={selectedCharacter}
                                selectCharacter={selectCharacter} 
                                fetching={fetching}
                                fetched={fetched}
                                failed={failed}
                                error={error}
                                loggedIn={loggedIn}
                                dismissError={dismissError}
                            />
                            <Footer version={version} fetched={fetched} />
                        </div>
                    </BrowserRouter>
                </LocalizeProvider>
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
    clanExists: PropTypes.bool.isRequired,
    profileExists: PropTypes.bool.isRequired,
    createClan: PropTypes.func.isRequired,
    clan: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    selectCharacter: PropTypes.func.isRequired,
    principal: PropTypes.object
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { loggedIn, principal } = state.auth;
    const { turn } = state.turn;
    const { clan, selectedCharacter } = state.clan;
    const clanExists = state.clan.exists;
    const profileExists = state.profile.exists;
    const { version } = state.app;
    const { maxTurns, turnTimes } = state.game.properties;

    const fetching = state.auth.fetching || state.turn.fetching 
        || state.clan.fetching || state.game.fetching || state.profile.profile.fetching;
    const fetched = state.auth.fetched && state.turn.fetched 
        && state.clan.fetched && state.game.fetched && state.profile.profile.fetched;
    const failed = state.auth.failed || state.turn.failed 
        || state.clan.failed || state.game.failed || state.profile.profile.failed;
    const error = state.turn.error || state.clan.error || state.game.error || state.profile.profile.error;

    return { fetching, fetched, failed, loggedIn, turn, maxTurns, turnTimes, clanExists, 
        clan, selectedCharacter, version, principal, error, profileExists };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        { 
            fetchPrincipal,
            fetchProfile,
            fetchTurn,
            fetchGameProperties,
            createClan, 
            selectCharacter, 
            fetchVersion,
            dismissError
        }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
