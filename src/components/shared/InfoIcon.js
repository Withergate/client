import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

import infoIcon from '../../images/info.png';

import TooltipWrapper from './TooltipWrapper';

const InfoIcon = (props) => (
    <div className="mr-1 ml-1" >
        <TooltipWrapper textKey={props.textKey}>
            <Image height="25px" src={infoIcon}/>
        </TooltipWrapper>     
    </div>
);

InfoIcon.propTypes = {
    textKey: PropTypes.string.isRequired
};

export { InfoIcon };