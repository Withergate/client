import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';

const OutfitTooltip = ({outfit}) => (
    <div>
        <b>{getTranslatedText(outfit.details.name)}</b>
        <p>{getTranslatedText(outfit.details.description)}</p>
        <small>
            <b><Translate id="basic.armor" />: </b>{outfit.details.armor}
        </small>
    </div>
);

OutfitTooltip.propTypes = {
    outfit: PropTypes.object.isRequired
};

export default OutfitTooltip;