var authUrl = window._env_.AUTH_URL;
var apiUrl = window._env_.API_URL;
var clientId = window._env_.CLIENT_ID;
var tokenUrl = authUrl 
  + 'oauth/authorize' 
  +'?response_type=token&client_id=' + clientId + '&redirect_uri=' + window._env_.REDIRECT_URL;

export const AUTH_URL = authUrl;
export const API_URL = apiUrl;
export const TOKEN_URL = tokenUrl;
