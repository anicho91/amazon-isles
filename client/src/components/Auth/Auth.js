import React from 'react';
import jwt_decode from 'jwt-decode';
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


export function login0() {
    auth.authorize({
        redirectUri: AUTH_CONFIG.callbackUrl,
        responseType: 'token id_token',
        scope: 'openid profile'
    });
}

export function login1() {
    auth1.authorize({
        redirectUri: 'http://localhost:3000/provider',
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
        });
    });
    let uId = getParameterByName('id_token');
    console.log('decoded', jwt_decode(uId))
    console.log(window.location.hash)
    console.log('getID', getIdToken())
   
    
}

function setAccessToken() {
    let accessToken = getParameterByName('access_token');
    localStorage.setItem('access-token', accessToken);
}

function setIdToken() {
    let idToken = getParameterByName('id_token');
    localStorage.setItem('access-token', idToken);
}

function setExpiration() {
    let expiresIn = getParameterByName('expires_in');
    localStorage.setItem('expires_in', expiresIn);
}

export function logout() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_in');

}

export function getAccessToken() {
    return localStorage.getItem('access_token')
}

export function getIdToken() {
    return localStorage.getItem('id_token')
}

export function setSession() {
    localStorage.setItem('isLoggedin', 'true')
    setIdToken();
    setAccessToken();
    setExpiration();

}


export function isAuthenticated() {
    const expirationTime = localStorage.getItem('expires_in');
    let expiresAt = (expirationTime * 1000) + new Date().getTime();

    return new Date < expiresAt
}












