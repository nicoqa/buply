const { use } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { keyword } = require('color-convert');
const { diffLines } = require('diff');
const expect = require('chai').expect;
require('dotenv').config();
chai.use(chaiHttp);

let { getAndStatus, postAndStatus } = require('../../../lib/common');
const { routes } = require('../../../routes');
const { mockModel } = require('../../../testModels/mockModels');
const signInRoute = routes.auth.admin.login;
const signUpRoute = routes.auth.signUp;
const url = `${process.env.URL_API_STG}`;
const messageMissingCredential = "Missing credentials";
const messageWorngCredential = "INVALID_CREDENTIALS";
let key;

let validLogin = mockModel.valid.login;
let invalidLogin = mockModel.invalid.login;

describe('Sign In Section', () => {
    it('Valid Sign In', (done) => {
        console.log(url);
        console.log(signInRoute);
        console.log(validLogin);
        postAndStatus(url, signInRoute, validLogin, 200);
        done();
    });
    describe('Invalid Sign Ip', () => {
        it('No email', (done) => {
            postAndStatus(url, signInRoute, invalidLogin.noEmail, 400, messageMissingCredential);
            done();
        });
        it('Wrong email', (done) => {
            postAndStatus(url, signInRoute, invalidLogin.wrongEmail, 401, messageWorngCredential);
            done();
        });
        it('No password', (done) => {
            postAndStatus(url, signInRoute, invalidLogin.noPassword, 400, messageMissingCredential);
            done();
        });
        it('Wrong password', (done) => {
            postAndStatus(url, signInRoute, invalidLogin.wrongPassword, 401, messageWorngCredential);
            done();
        });
    });
});