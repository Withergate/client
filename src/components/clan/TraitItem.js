import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'

import { getTranslatedText } from '../../translations/translationUtils';

const TraitItem = ({trait}) => (
    <div data-tip data-for={trait.details.identifier}>
        <img className="mr-2 mb-2" height="36" src={trait.details.imageUrl} alt="" />
        
        <ReactTooltip id={trait.details.identifier} effect="solid">
            <b>{getTranslatedText(trait.details.name)}</b>
            <p>{getTranslatedText(trait.details.description)}</p>
        </ReactTooltip>
    </div>
);

TraitItem.propTypes = {
    trait: PropTypes.object.isRequired
};

export default TraitItem;