const { use } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
require('dotenv').config();
chai.use(chaiHttp);

let { get_and_status, post_and_return, post_and_status } = require('../../../lib/common');
const { routes } = require('../../../routes');
const { mockModel } = require('../../../testModels/mockModels');
const signInRoute = routes.test.auth.signIn;
const signUpRoute = routes.test.auth.signUp;
const url = `${process.env.URL_API_STG}`;

let validLogin = mockModel.valid.login;
let invalidLogin = mockModel.invalid.login;

describe('Sign In Section', () => {
    it('Valid Sign Ip', () => {
        post_and_status(url, signInRoute, validLogin, 200);
    });
    describe('Invalid Sign Ip', () => {
        it('No email', (done) => {
            post_and_status(url, signInRoute, invalidLogin.noEmail, 404, "Missing credentialss");
        });
        it('Wrong email', (done) => {
            post_and_status(url, signInRoute, invalidLogin.wrongEmail, 400, "ENTITY_NOT_FOUND");
        });
        it('No password', (done) => {
            post_and_status(url, signInRoute, invalidLogin.noPassword, 400, "Missing credentials");
        });
        it('Wrong password', (done) => {
            post_and_status(url, signInRoute, invalidLogin.wrongPassword, 401, "INVALID_CREDENTIALS");
        });
    });
});