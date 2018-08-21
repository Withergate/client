export const AUTH_URL = 'http://localhost:9000/auth/';
export const API_URL = 'http://localhost:8080/api/';

export const TOKEN_URL =
  AUTH_URL +
  'oauth/authorize' +
  '?response_type=token&client_id=gigy&redirect_uri=http://localhost:3000';