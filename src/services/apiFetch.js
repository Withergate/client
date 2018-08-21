export function getHeaders() {
    const token = localStorage.getItem('token');
  
    // only fetch if we have token
    if (token === null) {
        return;
    }
  
    // request headers
    const config = {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
  
    return config;
}