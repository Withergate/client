import React from 'react';
import { Translate } from "react-localize-redux";

import { TOKEN_URL} from '../services/constants/endpoints';
import { Button, Card } from 'react-bootstrap';

const LoginPage = () => (
    <main className="p-4 text-center">
        <h1>Withergate</h1>
        <p>
            <Translate id="login.intro1" />
        </p>
        <p>
            <Translate id="login.intro2" />
        </p>

        <p className="text-muted">
            <Translate id="login.info" />
        </p>

        {
            !window._env_.START_DATE ?
            <>
                <a href={TOKEN_URL}>
                    <Button className="m-4" variant="dark"><Translate id="login.button" /></Button>
                </a>
                <p className="text-muted">
                    <small className="text-muted">
                        <Translate id="login.redirect" />
                    </small>  
                </p>
            </>
            : <Card className="p-2" bg="warning">
                <Card.Body>
                    <Translate id="login.start" data={{ date: window._env_.START_DATE }}/>
                </Card.Body>
            </Card>
        }
        
    </main>
);

export default LoginPage;