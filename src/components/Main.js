import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withLocalize } from "react-localize-redux";
import {renderToStaticMarkup} from 'react-dom/server';

import translations from '../translations/translations.json';
import spinner from '../images/spinner.gif';

import HomePage from './HomePage';
import ClanPage from './ClanPage';
import LocationsPage from './LocationsPage';
import FamePage from './FamePage';
import ClanSetupForm from './clan/ClanSetupForm';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage';

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
                    this.props.loggedIn ?
                        this.props.fetched &&
                            this.props.exists ? 
                            <div>
                                <Switch>
                                    <Route exact path='/' component={HomePage}/>
                                    <Route path='/clan' component={ClanPage}/>
                                    <Route path='/locations' component={LocationsPage}/>
                                    <Route path='/fame' component={FamePage}/>
                                    <Route path='/admin' component={AdminPage}/>
                                </Switch>
                            </div>
                            : <ClanSetupForm createClan={this.props.createClan}/>
                    : this.props.fetching ?
                        <img className="spinner" src={spinner} alt="Loading..." />
                        : <LoginPage />
                }
            </main>
        );
    }
}

Main.propTypes = {
    exists: PropTypes.bool.isRequired,
    createClan: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired
};

export default withLocalize(Main);