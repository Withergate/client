export const AUTH_URL = 'http://auth.withergate.com/';
export const API_URL = 'http://api.withergate.com/';
// export const API_URL = 'http://localhost:8080/';

var tokenUrl;
if (process.env.NODE_ENV !== 'production') {
  tokenUrl =
    AUTH_URL +
    'oauth/authorize' +
    '?response_type=token&client_id=withergate&redirect_uri=http://localhost:3000';
} else {
  tokenUrl =
    AUTH_URL +
    'oauth/authorize' +
    '?response_type=token&client_id=withergate&redirect_uri=http://game.withergate.com';
}

export const TOKEN_URL = tokenUrl;

