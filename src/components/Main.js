import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withLocalize } from "react-localize-redux";
import {renderToStaticMarkup} from 'react-dom/server';

import translations from '../translations/translations.json';
import spinner from '../images/spinner.gif';

import { Error } from './shared/Error';
import HomePage from './HomePage';
import ClanPage from './ClanPage';
import ActionPage from './ActionPage';
import FamePage from './FamePage';
import ClanSetupForm from './clan/ClanSetupForm';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage';
import AboutPage from './AboutPage.js';
import ProfileSetupForm from './profile/ProfileSetupForm.js';
import ProfilePage from './ProfilePage.js';

class Main extends Component {
    constructor(props) {
        super(props);

        this.props.initialize({
            languages: [
                {name: 'English', code: 'en'},
                {name: 'Czech', code: 'cs'}
            ],
            options: {renderToStaticMarkup}
        });

        this.props.addTranslation(translations);
    }

    render() {
        return (
            <main>
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.loggedIn && this.props.failed && this.props.error && <Error message={String(this.props.error)} dismiss={this.props.dismissError} />
                }
                {

                    <div className="main pb-2">
                        <Switch>
                            <Route exact path='/' component={getComponent(this.props.loggedIn, this.props.fetched, this.props.profileExists, this.props.clanExists, HomePage)}/>
                            <Route path='/clan' component={getComponent(this.props.loggedIn, this.props.fetched, this.props.profileExists, this.props.clanExists, ClanPage)}/>
                            <Route path='/action' component={getComponent(this.props.loggedIn, this.props.fetched, this.props.profileExists, this.props.clanExists, ActionPage)}/>
                            <Route path='/fame' component={getComponent(this.props.loggedIn, this.props.fetched, this.props.profileExists, this.props.clanExists, FamePage)}/>
                            <Route path='/profile' component={getComponent(this.props.loggedIn, this.props.fetched, this.props.profileExists, true, ProfilePage)}/>
                            <Route path='/about' component={AboutPage}/>
                            <Route path='/admin' component={getComponent(this.props.loggedIn, this.props.fetched, this.props.profileExists, true, AdminPage)}/>
                        </Switch>
                    </div>
                }
            </main>
        );
    }
}

const getComponent = (loggedIn, fetched, profileExists, clanExists, component) => {
    if (!loggedIn) {
        return LoginPage
    }
    if (!fetched) {
        return null
    }
    if (!profileExists) {
        return ProfileSetupForm
    }
    if (!clanExists) {
        return ClanSetupForm
    }
    return component;
}

Main.propTypes = {
    clanExists: PropTypes.bool.isRequired,
    profileExists: PropTypes.bool.isRequired,
    initialize: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    dismissError: PropTypes.func.isRequired
};

export default withLocalize(Main);