import React from 'react';
import PropTypes from 'prop-types';

const ConsumableListItem = ({consumable, selectedCharacter, useConsumable}) => (
    <div className="m-4 p-2 rounded bg-light" key={consumable.id}>
        <div className="row">
            <div className="col">
                <b>{consumable.details.name}</b>
                <p className="mt-2">
                    {consumable.details.description}
                </p>
                <small>{consumable.details.effect}</small>
            </div>
        </div>
        <div className="row p-3">
            { selectedCharacter !== undefined ? 
                <button 
                    className="btn btn-dark" 
                    onClick={() => useConsumable(consumable.id, selectedCharacter.id)}>
                    Use
                </button> 
                : <small className="text-muted">Select a character to use this item.</small>
            }
        </div>
    </div>
);

ConsumableListItem.propTypes = {
    consumable: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    useConsumable: PropTypes.func.isRequired
};

export default ConsumableListItem;