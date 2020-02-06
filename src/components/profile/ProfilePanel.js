import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const ProfilePanel = ({profile}) => (
    <Card className="p-3">
        <h5>{profile.name}</h5> 
    </Card>
);

ProfilePanel.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfilePanel;