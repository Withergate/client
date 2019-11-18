import React from 'react';
import PropTypes from 'prop-types';

import { getTranslatedText } from '../../translations/translationUtils';
import ItemDetails from './ItemDetails';

const ItemTooltip = ({item}) => (
    <div>
        <b>{getTranslatedText(item.details.name)}</b>
        <p>{getTranslatedText(item.details.description)}</p>
        <ItemDetails details={item.details} />
    </div>
);

ItemTooltip.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemTooltip;