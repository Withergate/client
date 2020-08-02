import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'

import { getTranslatedText } from '../../translations/translationUtils';
import { Translate } from 'react-localize-redux';

const TraitItem = ({trait}) => (
    <div data-tip data-for={trait.details.identifier}>
        <img className="mr-2" height="36" src={trait.details.imageUrl} alt="" />
        
        <ReactTooltip id={trait.details.identifier} effect="solid" className="tooltip-multiline">
            <b>{getTranslatedText(trait.details.name)}</b>
            <p>{getTranslatedText(trait.details.description)}</p>
            {
                trait.details.bonus > 0 &&
                <p>
                    <b><Translate id="basic.bonus" />: </b> {trait.details.bonus}
                    { trait.details.optional && <span> (<Translate id="labels.chance" />)</span> } 
                </p>
            }
        </ReactTooltip>
    </div>
);

TraitItem.propTypes = {
    trait: PropTypes.object.isRequired
};

export default TraitItem;