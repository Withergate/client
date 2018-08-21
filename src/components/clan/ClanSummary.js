import React from 'react';
import PropTypes from 'prop-types';

const ClanSummary = ({clan}) => (
    <div className="m-4 p-2 rounded bg-light">
        <div className="row">
            <div className="col">
                <h4 className="mb-2">{clan.name}</h4>
            </div>
        </div>
        <div className="row">
            <div className="col col-lg-2">
                <b>Caps</b>: {clan.caps}
            </div>
            <div className="col col-lg-2">
                <b>Junk</b>: {clan.junk}
            </div>
        </div> 
    </div>
);

ClanSummary.propTypes = {
    clan: PropTypes.object.isRequired
};

export default ClanSummary;