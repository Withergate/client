import React from 'react';

import { TOKEN_URL} from '../services/constants/endpoints';

const LoginPage = () => (
    <main className="p-4 text-center">
        <h1>Withergate</h1>
        <p>
            Welcome, wastelander! It is year 2056 and Earth is devastated by series of both conventional and nuclear wars.
            Those lucky enough to survive the chaos are left with little to nothing. Sociaty split into small groups which fight each other
            over the remaining resources found in the wasteland and city ruins.
        </p>
        <p>
            This is a story about such struggle. You will find yourself leading a small clan near the ruins of former metropolis - now called Withergate.
            It is a dangerous place to live in but your only chance for survival. Are you up for it?
        </p>

        <p className="text-muted">
            Withergate is a turn-based browser game. Players control clans consisting of several characters. Interacting with the game is done via
            assigning actions to these characters. Every day at midnight (UTC), these actions are evaluated and your characters become ready again.
        </p>

        <a href={TOKEN_URL}><button className="btn btn-dark m-4">ENTER</button></a>
        <p className="text-muted">
            <small className="text-muted">
                By clicking on the link above, you will be taken to an authorization server to login. If you don't have an account, register on the
                next page and come back once the registration is finished.
            </small>  
        </p>
    </main>
);

export default LoginPage;