// emailmodel.js

import { google } from 'googleapis';

const CLIENT_ID = '1053597056260-a7h9ag0hgrn4bt4o56puh36jmrfuaivc.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04oh18bUPm7BBCgYIARAAGAQSNwF-L9Ir6JyAVS8IWPRIlmLbbnikugEakk0Waa_k_miY1d3DF0hjI4JJavhAROA7SH2aN45ve-s';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default oAuth2Client;
