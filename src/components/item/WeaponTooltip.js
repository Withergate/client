import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

const WeaponTooltip = ({weapon}) => (
    <div>
        <b><Translate id={weapon.details.name} /></b>
        <p><Translate id={weapon.details.description} /></p>
        <small>
            <b><Translate id="basic.type" />: </b><Translate id={weapon.details.type} /><br />
            <b><Translate id="basic.bonus" />: </b>{weapon.details.combat}
        </small>
    </div>
);

WeaponTooltip.propTypes = {
    weapon: PropTypes.object.isRequired
};

export default WeaponTooltip;