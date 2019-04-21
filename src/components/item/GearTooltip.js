import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';

const GearTooltip = ({gear}) => (
    <div>
        <b>{getTranslatedText(gear.details.name)}</b>
        <p>{getTranslatedText(gear.details.description)}</p>
        <small>
            <b><Translate id="basic.bonus" />: </b>{gear.details.bonus}
        </small>
    </div>
);

GearTooltip.propTypes = {
    gear: PropTypes.object.isRequired
};

export default GearTooltip;