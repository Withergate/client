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
                    this.props.loggedIn ?
                        this.props.fetched &&
                            <div>
                                { this.props.profileExists ? 
                                    <div>
                                        { !this.props.clanExists && !this.props.fetching && <ClanSetupForm createClan={this.props.createClan}/> }
                                        <Switch>
                                            { this.props.clanExists && <Route exact path='/' component={HomePage}/> }
                                            { this.props.clanExists && <Route path='/clan' component={ClanPage}/> }
                                            { this.props.clanExists && <Route path='/action' component={ActionPage}/> }
                                            { this.props.clanExists && <Route path='/fame' component={FamePage}/> }
                                            { this.props.clanExists && <Route path='/profile' component={ProfilePage}/> }
                                            <Route path='/about' component={AboutPage}/>
                                            <Route path='/admin' component={AdminPage}/>
                                        </Switch>
                                    </div>
                                    : <ProfileSetupForm />
                                }
                            </div>
                    : !this.props.fetching && <LoginPage />
                }
            </main>
        );
    }
}

Main.propTypes = {
    clanExists: PropTypes.bool.isRequired,
    profileExists: PropTypes.bool.isRequired,
    createClan: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    dismissError: PropTypes.func.isRequired
};

export default withLocalize(Main);