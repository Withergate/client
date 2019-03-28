import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'

import { getTranslatedText } from '../../translations/translationUtils';

const TraitItem = ({trait}) => (
    <div data-tip data-for={trait.details.identifier}>
        <img className="mr-2 mb-2" height="30" src={trait.details.imageUrl} alt="" />
        {getTranslatedText(trait.details.name)}

        <ReactTooltip id={trait.details.identifier} effect="solid" place="left">
            {getTranslatedText(trait.details.description)}
        </ReactTooltip>
    </div>
);

TraitItem.propTypes = {
    trait: PropTypes.object.isRequired
};

export default TraitItem;