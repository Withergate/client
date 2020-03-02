import React from 'react';
import { Translate } from "react-localize-redux";
import { Image, Row, Col } from 'react-bootstrap';

const Preview = () => (
    <div className="preview">
        <Row>
            <Col md={6} xs={12}>
                <Image
                    className="w-100 mb-2"
                    src="https://storage.googleapis.com/withergate-images/tutorial/clan.png"
                />
                <h5><Translate id="header.turn" /></h5>
            </Col>
            <Col md={6} xs={12}>
                <Image
                    className="w-100 mb-2"
                    src="https://storage.googleapis.com/withergate-images/tutorial/actions.png"
                />
                <h5><Translate id="header.turn" /></h5>
            </Col>
        </Row>
        <Row>
            <Col md={6} xs={12}>
                <Image
                    className="w-100 mb-2"
                    src="https://storage.googleapis.com/withergate-images/tutorial/fame.png"
                />
                <h5><Translate id="header.turn" /></h5>
            </Col>
            <Col md={6} xs={12}>
                <Image
                    className="w-100 mb-2"
                    src="https://storage.googleapis.com/withergate-images/tutorial/turns.png"
                />
                <h5><Translate id="header.turn" /></h5>
            </Col>
        </Row>
    </div>
);

export default Preview;