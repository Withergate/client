import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import ClanPage from './ClanPage';
import LocationsPage from './LocationsPage';
import ClanSetupForm from './clan/ClanSetupForm';

const Main = ({exists, createClan}) => (
    <main>
        { exists ? 
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/clan' component={ClanPage}/>
                <Route path='/locations' component={LocationsPage}/>
            </Switch>
            : <ClanSetupForm createClan={createClan}/>
        }
    </main>
);

Main.propTypes = {
    exists: PropTypes.bool.isRequired,
    createClan: PropTypes.func.isRequired
};

export default Main;