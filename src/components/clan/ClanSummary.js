import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { ProgressBar } from 'react-bootstrap';

import junk from '../../images/junk.png';
import food from '../../images/food.png';
import caps from '../../images/caps.png';
import fame from '../../images/fame.png';
import information from '../../images/information.png';

const ClanSummary = ({clan}) => (
    <div className="m-4 p-2 rounded bg-light">
        <div className="row">
            <div className="col">
                <h4 className="mb-2">{clan.name}</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-2">
                <img height="20" src={caps} alt="caps" /> <b><Translate id="basic.caps" /></b>: {clan.caps}
            </div>
            <div className="col-12 col-md-2">
                <img height="20" src={junk} alt="junk" /> <b><Translate id="basic.junk" /></b>: {clan.junk}
            </div>
            <div className="col-12 col-md-2">
                <img height="20" src={food} alt="food" /> <b><Translate id="basic.food" /></b>: {clan.food}
            </div>
            <div className="col-12 col-md-2">
                <img height="20" src={fame} alt="fame" /> <b><Translate id="basic.fame" /></b>: {clan.fame}
            </div>
        </div> 
        <div className="row mt-3">
            <div className="col-4">
                <img height="20" src={information} alt="information" /> <b><Translate id="basic.informationLevel" /></b>: {clan.informationLevel}
                <ProgressBar className="mt-2" min={0} max={clan.nextInformationLevel} now={clan.information} />
            </div>
        </div>
    </div>
);

ClanSummary.propTypes = {
    clan: PropTypes.object.isRequired
};

export default ClanSummary;