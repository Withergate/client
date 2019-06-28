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
                            { this.props.exists ? 
                                <Switch>
                                    <Route exact path='/' component={HomePage}/>
                                    <Route path='/clan' component={ClanPage}/>
                                    <Route path='/action' component={ActionPage}/>
                                    <Route path='/fame' component={FamePage}/>
                                    <Route path='/about' component={AboutPage}/>
                                    <Route path='/admin' component={AdminPage}/>
                                </Switch>

                                : !this.props.fetching && <ClanSetupForm createClan={this.props.createClan}/>
                            }
                            </div>
                    : !this.props.fetching && <LoginPage />
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
    failed: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    dismissError: PropTypes.func.isRequired
};

export default withLocalize(Main);