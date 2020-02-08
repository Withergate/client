import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

import profileIcon from '../../images/profile.png'; 
import { Translate } from 'react-localize-redux';

const ProfilePanel = ({profile}) => (
    <Card className="p-3" border="none">
        <h5><Image src={profileIcon} width="32px" className="mr-2" />{profile.name}</h5>
        <ul className="list-inline">
            <li className="list-inline-item"><b><Translate id="profile.score" />: </b></li>
            <li className="list-inline-item">{profile.ranking}</li>
        </ul>
        <ul className="list-inline">
            <li className="list-inline-item"><b><Translate id="profile.numGames" />: </b></li>
            <li className="list-inline-item">{profile.numGames}</li>
        </ul>
    </Card>
);

ProfilePanel.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfilePanel;