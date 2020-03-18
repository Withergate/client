import React from 'react';
import { Translate } from "react-localize-redux";
import { Image, Row, Col } from 'react-bootstrap';

const Preview = () => (
    <div className="preview text-center">
            <Row className="mb-2">
            <Col md={6} xs={12}>
                <Translate>
                    {({ translate }) => 
                        <a href={translate("login.preview.image1")} target="_blank" rel="noopener noreferrer">
                            <Image src={translate("login.preview.image1")} className="w-100 mb-2 preview-image" />
                        </a>
                    }
                </Translate>
                <p><i><Translate id="login.preview.text1" /></i></p>
            </Col>
            <Col md={6} xs={12}>
                <Translate>
                    {({ translate }) => 
                        <a href={translate("login.preview.image2")} target="_blank" rel="noopener noreferrer">
                            <Image src={translate("login.preview.image2")} className="w-100 mb-2 preview-image" />
                        </a>
                    }
                </Translate>
                <p><i><Translate id="login.preview.text2" /></i></p>
            </Col>
        </Row>
        <Row>
            <Col md={6} xs={12}>
                <Translate>
                    {({ translate }) => 
                        <a href={translate("login.preview.image3")} target="_blank" rel="noopener noreferrer">
                            <Image src={translate("login.preview.image3")} className="w-100 mb-2 preview-image" />
                        </a>
                    }
                </Translate>
                <p><i><Translate id="login.preview.text3" /></i></p>
            </Col>
            <Col md={6} xs={12}>
                <Translate>
                    {({ translate }) => 
                        <a href={translate("login.preview.image4")} target="_blank" rel="noopener noreferrer">
                            <Image src={translate("login.preview.image4")} className="w-100 mb-2 preview-image" />
                        </a>
                    }
                </Translate>
                <p><i><Translate id="login.preview.text4" /></i></p>
            </Col>
        </Row>
    </div>
);

export default Preview;