var authUrl = window._env_.AUTH_URL;
var apiUrl = window._env_.API_URL;
var tokenUrl = authUrl 
  + 'oauth/authorize' 
  +'?response_type=token&client_id=withergate&redirect_uri=' + window._env_.REDIRECT_URL;

export const AUTH_URL = authUrl;
export const API_URL = apiUrl;
export const TOKEN_URL = tokenUrl;
