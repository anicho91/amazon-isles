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

var auth1 = new Auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: 'http://localhost:3000/provider',
    responseType: 'token id_token',
    scope: 'openid profile'
});

let userProfile;

// "https://afternoon-harbor-43363.herokuapp.com/"

export function login0() {
    auth0.authorize();
}

export function login1() {
    auth1.authorize();
}

export function handleAuthentication () {
    auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
            setSession(authResult);
            history.replace('/');
        } 
    })
}

export function setSession (authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    history.replace('/');
}

export function getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if(!accessToken) {
        throw new Error('No access token found');
    }
    return accessToken;
}

export function getProfile(cb) {
    let accessToken = getAccessToken();
    auth0.client.userInfo(accessToken, (err, profile) => {
        if(profile) {
            userProfile = profile;
        }
        cb(err, profile);
    })
}

export function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    userProfile = null;
    history.replace('/');
}

export function isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
}



