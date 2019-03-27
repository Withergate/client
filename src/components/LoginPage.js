import React from 'react';
import { Translate } from "react-localize-redux";

import { TOKEN_URL} from '../services/constants/endpoints';

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

        <a href={TOKEN_URL}><button className="btn btn-dark m-4"><Translate id="login.button" /></button></a>
        <p className="text-muted">
            <small className="text-muted">
                <Translate id="login.redirect" />
            </small>  
        </p>
    </main>
);

export default LoginPage;