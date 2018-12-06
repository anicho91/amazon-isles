import decode from 'jwt-decode';
import Auth0Lock from 'auth0-lock';
import Auth0 from 'auth0-js';
import AUTH_CONFIG from './Auth0-variables';
import history from '../history'


var auth0 = new Auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid'
});

export function login() {
    auth0.authorize();
}

export function handleAuthentication () {
    auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
            setSession(authResult);
            history.replace('/client');
        } 
    })
}

export function setSession (authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    history.replace('/client');
}


