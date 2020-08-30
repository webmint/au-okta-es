import Auth from './okta';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config = {
  issuer: `https://${process.env.OKTA_DOMAIN}/oauth2/default`,
  clientId: process.env.OKTA_ID,
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

const auth = new Auth(config);

export default auth;
