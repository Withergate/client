import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import ClanPage from './ClanPage';
import LocationsPage from './LocationsPage';
import ItemPage from './ItemsPage';
import ClanSetupForm from './clan/ClanSetupForm';
import CharacterSelector from './clan/CharacterSelector';

const Main = ({exists, createClan, clan, selectedCharacter, selectCharacter}) => (
    <main>
        { exists ? 
            <div>
                <CharacterSelector 
                    characters={clan.characters}
                    selectedCharacter={selectedCharacter}
                    onSelect={selectCharacter} />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/clan' component={ClanPage}/>
                    <Route path='/locations' component={LocationsPage}/>
                    <Route path='/items' component={ItemPage}/>
                </Switch>
            </div>
            : <ClanSetupForm createClan={createClan}/>
        }
    </main>
);

Main.propTypes = {
    exists: PropTypes.bool.isRequired,
    createClan: PropTypes.func.isRequired,
    clan: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    selectCharacter: PropTypes.func.isRequired,
};

export default Main;