import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCraftingItems } from '../../actions/dataActions';
import { craftItem } from '../../actions/actionActions';
import { dismissError } from '../../actions/uiActions';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';
import { Col, Row } from 'react-bootstrap';
import CraftingListItem from './CraftingListItem';

class CraftingList extends React.Component {
    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchCraftingItems();
        }
    }

    render() {
        return ( 
            <div>
                { this.props.fetched &&
                    renderList(this.props.items, this.props.selectedCharacter, this.props.craftItem)
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        )
    }
};

const renderList = (items, selectedCharacter, craftItem) => (
    <Row>
        {
            items.map(item => 
                <Col key={item.identifier} md={6} xs={12}>
                    <CraftingListItem item={item} selectedCharacter={selectedCharacter} craftItem={craftItem} />
                </Col>
            )
        }
    </Row>
);

CraftingList.propTypes = {
    items: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    craftItem: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { selectedCharacter } = state.clan;
    const items = state.data.crafting.data;
    const { fetched, fetching, failed, error } = state.data.crafting;

    console.log(fetched, items);

    return { fetching, fetched, failed, error, items, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchCraftingItems,
        craftItem,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CraftingList);