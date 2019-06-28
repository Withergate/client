var authUrl;
var apiUrl;
var tokenUrl;

if (process.env.NODE_ENV !== 'production') {
  authUrl = 'http://localhost:9000/';
  apiUrl = 'http://localhost:8080/';
  tokenUrl =
    authUrl +
    'oauth/authorize' +
    '?response_type=token&client_id=withergate-local&redirect_uri=http://localhost:3000';
} else {
  authUrl = 'http://auth.withergate.com/';
  apiUrl = 'http://api.withergate.com/';
  tokenUrl =
    authUrl +
    'oauth/authorize' +
    '?response_type=token&client_id=withergate&redirect_uri=http://game.withergate.com';
}

export const AUTH_URL = authUrl;
export const API_URL = apiUrl;
export const TOKEN_URL = tokenUrl;
