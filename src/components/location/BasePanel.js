import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Row, Col, Card } from 'react-bootstrap';

import { restWithCharacter } from '../../actions/actionActions';
import { ActionButton } from '../shared/ActionButton';

class BasePanel extends React.Component {

    render() {
        return ( 
            <div>
                <Card className="mb-4">
                    <Card.Img variant="top" width="600px" src="https://storage.googleapis.com/withergate-images/locations/base.png" />
                    <Card.Body>
                        <Row>
                            <Col md={12}>
                                <p><Translate id="base.restDescription" /></p>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        { this.props.selectedCharacter !== undefined ? 
                            <Row>
                                <ActionButton
                                    character={this.props.selectedCharacter}
                                    action={() => this.props.restWithCharacter(this.props.selectedCharacter.id)}
                                    buttonText="labels.rest"
                                    tooltip="base.restTooltip" />
                            </Row>
                            : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                        }
                    </Card.Footer>
                </Card>
            </div>
        )
    }
};

BasePanel.propTypes = {
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;

    return { selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        restWithCharacter
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BasePanel);