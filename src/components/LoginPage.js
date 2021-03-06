import React from 'react';
import { Translate } from "react-localize-redux";

import { TOKEN_URL } from '../services/constants/endpoints';
import { Button, Card, Row, Col, Collapse, Image, Badge } from 'react-bootstrap';

import CzechIcon from '../images/lang/czech.png';
import PatreonIcon from '../images/patreon.png';
import KofiIcon from '../images/kofi.png';
import Preview from '../components/login/Preview';
import GameInfoPanel from './login/GameInfoPanel';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            open: false
        };

        this.handleCollapseChange.bind(this);
    }

    handleCollapseChange(value) {
        this.setState({ 
            open: value
        });
    }

    render() {
        return (
            <main>
                <div className="p-4">
                    <Row>
                        <Col md={8} className="mb-md-4">
                            <div className="login-strip">
                                <Image src="https://storage.googleapis.com/withergate-images/logo.gif" className="logo mb-4" />
                                <span className="float-right right-align">
                                    <h5><Badge variant="warning"><Translate id="login.fastGame" /></Badge></h5>
                                    <h5><Badge variant="success"><Translate id="login.freeGame" /></Badge></h5>
                                </span>
                                <div className="pl-2">
                                    <p><Translate id="login.motto1" /></p>
                                    <p><b><Translate id="login.motto2" /></b></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            {
                                !window._env_.START_DATE ?
                                <Card className="p-3">
                                    <Image src="https://storage.googleapis.com/withergate-images/login.jpg" className="w-100" />
                                    <a href={TOKEN_URL}>
                                        <Button className="w-100 mb-2" variant="success"><Translate id="login.button" /></Button>
                                    </a>
                                </Card>
                                : <Card className="p-2" bg="warning">
                                    <Card.Body>
                                        <Translate id="login.start" data={{ date: window._env_.START_DATE }}/>
                                    </Card.Body>
                                </Card>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }} className="mb-4">
                            <Preview />
                        </Col>
                        <Col md={{ span: 4, order: 2 }} xs={{ span: 12, order: 1 }} className="mb-4">
                            <GameInfoPanel />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-4">
                            <div className="">
                                <p className="text-muted">
                                    <Translate id="login.info" />
                                </p>
                                <Button
                                    variant="outline-dark" size="sm"
                                    className="button-small mb-4"
                                    onClick={() => this.handleCollapseChange(!this.state.open)}>
                                        {
                                            this.state.open ?
                                                <Translate id="labels.closeDetails" />
                                                : <Translate id="login.story" />
                                        }
                                </Button>
                                
                                <Collapse in={this.state.open}>
                                    <div>
                                        <p><Translate id="login.lore.part1" /></p>
                                        <p><Translate id="login.lore.part2" /></p>  
                                        <p><Translate id="login.lore.part3" /></p>  
                                        <p><Translate id="login.lore.part4" /></p>
                                        <p><Translate id="login.lore.part5" /></p>
                                        <p><Translate id="login.lore.part6" /></p>
                                        <p><b><Translate id="login.lore.part7" /></b></p>
                                    </div>
                                </Collapse>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="p-2 right-align">
                                <p>
                                    <a href="https://www.facebook.com/withergate" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    <Image src={CzechIcon} width="25px" className="ml-2" />
                                </p>
                                <p>
                                    <a href="https://witherpedia.fandom.com/cs/wiki/" target="_blank" rel="noopener noreferrer">Wiki</a>
                                    <Image src={CzechIcon} width="25px" className="ml-2" />
                                </p>
                                <p>
                                    <a href="https://www.patreon.com/withergate" target="_blank" rel="noopener noreferrer">Patreon</a>
                                    <Image src={PatreonIcon} width="25px" className="ml-2" />
                                </p>
                                <p>
                                    <a href="https://ko-fi.com/withergate" target="_blank" rel="noopener noreferrer">Ko-Fi</a>
                                    <Image src={KofiIcon} width="25px" className="ml-2" />
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </main>
        )
    }
}

export default LoginPage;