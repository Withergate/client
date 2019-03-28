import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LocalizeProvider } from "react-localize-redux";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import { fetchPrincipal } from './actions/authActions';
import { fetchTurn } from './actions/turnActions';
import { fetchVersion } from './actions/appActions';
import { createClan, selectCharacter } from './actions/clanActions';


class App extends Component {

    componentDidMount() {
        this.props.fetchPrincipal();
        this.props.fetchTurn();
        this.props.fetchVersion();
    }

    render() {
        const { 
            fetched,
            fetching,
            failed,
            loggedIn,
            turn, 
            exists, 
            createClan, 
            selectCharacter, 
            selectedCharacter, 
            clan, 
            version,
            principal 
        } = this.props;
        
        return (
            <div>
                <LocalizeProvider>
                    <BrowserRouter>
                        <div>
                            <Header turn={turn} principal={principal} clan={clan}/>
                            <Main 
                                exists={exists}
                                createClan={createClan}
                                clan={clan}
                                selectedCharacter={selectedCharacter}
                                selectCharacter={selectCharacter} 
                                fetching={fetching}
                                fetched={fetched}
                                failed={failed}
                                loggedIn={loggedIn}
                            />
                            <Footer version={version} />
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
    exists: PropTypes.bool.isRequired,
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
    const { exists, clan, selectedCharacter } = state.clan;
    const { version } = state.app;

    const fetching = state.auth.fetching || state.turn.fetching || state.clan.fetching;
    const fetched = state.auth.fetched && state.turn.fetched;
    const failed = state.auth.failed || state.turn.failed;

    return { fetching, fetched, failed, loggedIn, turn, exists, clan, selectedCharacter, version, principal };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchPrincipal, fetchTurn, createClan, selectCharacter, fetchVersion }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
