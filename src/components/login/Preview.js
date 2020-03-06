import React from 'react';
import { Translate } from "react-localize-redux";
import { Image, Row, Col } from 'react-bootstrap';

const Preview = () => (
    <div className="preview">
            <Row className="mb-2">
            <Col md={6} xs={12}>
                <Translate>
                    {({ translate }) => <Image src={translate("login.images.preview1")} className="w-100 mb-2" /> }
                </Translate>
                <h5>Zaúkoluj postavy...</h5>
            </Col>
            <Col md={6} xs={12}>
                <Translate>
                    {({ translate }) => <Image src={translate("login.images.preview1")} className="w-100 mb-2" /> }
                </Translate>
                <h5>Rozšiř svůj klan</h5>
            </Col>
        </Row>
        <Row>
            <Col md={6} xs={12}>
                <Translate>
                    {({ translate }) => <Image src={translate("login.images.preview1")} className="w-100 mb-2" /> }
                </Translate>
                <h5>Interaguj s ostatními</h5>
            </Col>
            <Col md={6} xs={12}>
                <Translate>
                    {({ translate }) => <Image src={translate("login.images.preview1")} className="w-100 mb-2" /> }
                </Translate>
                <h5>Blabla, další text</h5>
            </Col>
        </Row>
    </div>
);

export default Preview;