import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip'

const TraitItem = ({trait}) => (
    <div data-tip data-for={trait.details.description}>
        <img className="mr-2 mb-2" height="40" src={trait.details.imageUrl} />
        <Translate id={trait.details.name} />

        <ReactTooltip id={trait.details.description} effect="solid" place="left">
            <Translate id={trait.details.description} />
        </ReactTooltip>
    </div>
);

TraitItem.propTypes = {
    trait: PropTypes.object.isRequired
};

export default TraitItem;