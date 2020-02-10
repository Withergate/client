import React from 'react';
import { Card, Row, Col, Button, Image } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';
import { AUTH_URL } from '../../services/constants/endpoints';
import logoutIcon from '../../images/logout.png';
import configIcon from '../../images/config.png';

const logout = () => {
    // delete token
    localStorage.removeItem('token');

    // redirect to auth logout
    window.location = AUTH_URL + "logout"
}

const AccountPanel = () => (
    <Card className="p-3 mb-4" border="primary">
        <p><Translate id="profile.manageAccount" /></p>
        <Row>
            <Col>
                <a href={AUTH_URL + "profile"}>
                    <Button className="button-large" variant="primary">
                        <Image src={configIcon} width="24px" className="mr-2" /><Translate id="profile.manageAccountButton" />
                    </Button>
                </a>
                <Button className="button-large ml-2" variant="danger" onClick={() => logout()}>
                    <Image src={logoutIcon} width="24px" className="mr-2" /><Translate id="profile.logout" />
                </Button>
            </Col>
        </Row>
    </Card>
);

export default AccountPanel;