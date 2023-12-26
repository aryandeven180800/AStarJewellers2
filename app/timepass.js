import nodemailer from 'nodemailer'
import { google } from 'googleapis';

const CLIENT_ID='1053597056260-a7h9ag0hgrn4bt4o56puh36jmrfuaivc.apps.googleusercontent.com'
const CLIENT_SECRET='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'
const REDIRECT_URI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//04oh18bUPm7BBCgYIARAAGAQSNwF-L9Ir6JyAVS8IWPRIlmLbbnikugEakk0Waa_k_miY1d3DF0hjI4JJavhAROA7SH2aN45ve-s'

const oAuth2Client= new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

async function sendMail(){
    try{
        const accessToken = await oAuth2Client.getAccessToken()

        const transport= nodemailer.createTransport({
            service:'gmail',
            auth: {
                type:'OAuth2',
                user: 'aryandsheth@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }

        })

        const mailOptions = {
            from : 'Aryan  <aryandsheth@gmail.com>',
            to:'chessinfo42@gmail.com',
            subject:"Hello",
            text: 'Helle from gmail email using API',
            html:'<h1>Helle from gmail email using API</h1>'
        };

        const result = await transport.sendMail(mailOptions)
        return result

    }
    catch(error){
        return(error)
    }
}

sendMail().then(result=> console.log('Email is sent', result))
. catch(error =>console.log(err))