import React from 'react';

import { TOKEN_URL} from '../services/constants/endpoints';

// IMPORT IMAGES

// COMPONENT

const LoginPage = () => (
    <main>
        <div className="pt-4 text-center">
            <p>You must be logged-in to play the game.</p>
            <a href={TOKEN_URL}><button className="btn btn-dark">LOGIN</button></a>
        </div>
    </main>
);

export default LoginPage;