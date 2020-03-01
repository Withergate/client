import React from 'react';
import { Translate } from "react-localize-redux";

import { TOKEN_URL} from '../services/constants/endpoints';
import { Button, Card, Row, Col, Collapse, Image } from 'react-bootstrap';

import CzechIcon from '../images/lang/czech.png';
import PatreonIcon from '../images/patreon.png';
import Preview from '../components/login/Preview';

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
                        <Col md={8} className="mb-4">
                            <div className="login-strip p-4 h-100">
                                <h1>Withergate</h1>
                                <h5><Translate id="login.motto" /></h5>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            {
                                !window._env_.START_DATE ?
                                <Card className="p-3">
                                    <a href={TOKEN_URL}>
                                        <Button className="w-100 mb-2" variant="success"><Translate id="login.button" /></Button>
                                    </a>
                                    <p className="text-muted">
                                        <small className="text-muted">
                                            <Translate id="login.redirect" />
                                        </small>  
                                    </p>
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
                        <Col md={8} className="mb-4">
                            <Preview />
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="">
                                <p className="text-muted">
                                    <Translate id="login.info" />
                                </p>
                                <Button
                                    variant="outline-dark" size="sm"
                                    className="button-small mb-2"
                                    onClick={() => this.handleCollapseChange(!this.state.open)}>
                                        {
                                            this.state.open ?
                                                <Translate id="labels.closeDetails" />
                                                : <Translate id="login.story" />
                                        }
                                </Button>
                                
                                <Collapse in={this.state.open}>
                                    <div>
                                        <p>
                                            <Translate id="login.intro1" />
                                        </p>
                                        <p>
                                            <Translate id="login.intro2" />
                                        </p>          
                                    </div>
                                </Collapse>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-4">
                            <Card className="p-4">Game stats</Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="p-2">
                                <p>
                                    <Image src={CzechIcon} width="25px" className="mr-2" /> <a href="https://www.facebook.com/withergate" target="_blank" rel="noopener noreferrer">Facebook</a>
                                </p>
                                <p>
                                    <Image src={CzechIcon} width="25px" className="mr-2" /> <a href="https://witherpedia.fandom.com/cs/wiki/" target="_blank" rel="noopener noreferrer">Wiki</a>
                                </p>
                                <p>
                                    <Image src={PatreonIcon} width="25px" className="mr-2" /> <a href="https://www.patreon.com/withergate" target="_blank" rel="noopener noreferrer">Patreon</a>
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