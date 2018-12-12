import React from 'react';
import Auth0Lock from 'auth0-lock';
import Auth0 from 'auth0-js';
import AUTH_CONFIG from './Auth0-variables';
import history from '../history';
import {BrowserRouter, withRouter} from 'react-router-dom';


var auth = new Auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId
});

var auth1 = new Auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId
    
});

let clientUrl ;
let providerUrl;

if(process.env.NODE_ENV === "production") {
    clientUrl = "https://afternoon-harbor-43363.herokuapp.com/client"
} else {
    clientUrl = "http://localhost:3000/client";
}

if(process.env.NODE_ENV === "production") {
    providerUrl = "https://afternoon-harbor-43363.herokuapp.com/provider"
} else {
    providerUrl = "http://localhost:3000/provider";
}
//https://afternoon-harbor-43363.herokuapp.com/google621798b7609ae146.html 

export function login0() {
    auth.authorize({
        redirectUri: clientUrl,
        responseType: 'token id_token',
        scope: 'openid profile'
    });
}

export function login1() {
    auth1.authorize({
        redirectUri: providerUrl,
        responseType: 'token id_token',
        scope: 'openid profile'
    });
}

function getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    console.log(name, match);
    console.log("Match array1:", decodeURIComponent(match[1].replace(/\+/g, ' ')))
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


export function handleAuthentication() {
    auth.parseHash({hash: window.location.hash}, function(err, authResult) {
     authResult = getParameterByName('access_token');
       if(err) {
            console.log(err)
        }
        setSession();
        auth.client.userInfo(authResult, function(err,user){
            console.log(user)
            localStorage.setItem('token', user.sub);
            localStorage.setItem('name', user.name);
        });
    });
}

function setAccessToken() {
    let accessToken = getParameterByName('access_token');
    localStorage.setItem('access_token', accessToken);
}

function setIdToken() {
    let idToken = getParameterByName('id_token');
    localStorage.setItem('id_token', idToken);
}

function setExpiration() {
    let expiresIn = getParameterByName('expires_in');
    localStorage.setItem('expires_in', expiresIn);
}

export function logout() {
    localStorage.removeItem('Loggedin')
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_in');
    localStorage.setItem('expires_at', 0);
    window.location.href = "https:/mypass.auth0.com/v2/logout";

}

export function getAccessToken() {
    return localStorage.getItem('access_token')
}

export function getIdToken() {
    return localStorage.getItem('id_token')
}

const expirationTime = localStorage.getItem('expires_in');
let expiresAt = (expirationTime * 1000) + new Date().getTime();

export function setSession() {
    
    setIdToken();
    setAccessToken();
    setExpiration();
    localStorage.setItem('Loggedin', 'true');
    localStorage.setItem('expires_at', expiresAt);

}

// export function isLoggedin() {
//     const status = localStorage.getItem('Loggedin')
//     return status;
// }

export function isAuthenticated() {
    return new Date < expiresAt;
}














