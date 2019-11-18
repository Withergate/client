import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { WEAPON, OUTFIT, GEAR, CONSUMABLE } from '../../constants/constants';

const ItemDetails = ({details}) => (
    <div>
        {
            details.itemType === WEAPON &&
                <>
                    <b><Translate id="basic.type" />: </b><Translate id={details.weaponType} /><br />
                    <b><Translate id="basic.combat" />: </b>{details.bonus}
                </>
        }
        {
            details.itemType === OUTFIT &&
                <>
                    <b><Translate id="basic.armor" />: </b>{details.bonus}
                </>
        }
        {
            details.itemType === GEAR &&
                <>
                    <b><Translate id="basic.bonus" />: </b>{details.bonus}
                </>
        }
        {
            details.itemType === CONSUMABLE &&
                <>
                    <b><Translate id="basic.type" />: </b><Translate id={details.effectType} /><br />
                    <b><Translate id="basic.bonus" />: </b>{details.bonus}
                </>
        }
    </div>
);

ItemDetails.propTypes = {
    details: PropTypes.object.isRequired
};

export default ItemDetails;