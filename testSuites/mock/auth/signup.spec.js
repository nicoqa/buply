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

let validRegisterModel = mockModel.valid.register;
let inValidRegisterModel = mockModel.invalid.register;

describe('Sign Up Section', () => {
//    describe('Valid Sign Up', () => {
        it('Valid Sign Up', () => {
            post_and_status(url, signUpRoute, validRegisterModel, 200);

        });
    });
    describe('Invalid Sign Up', () => {
        describe('Check the required fields by not filling any data', () => {
            it('Email already taken', () => {
                post_and_status(url, signUpRoute, validRegisterModel, 400, "EMAIL_ALREADY_TAKEN");
            });
            it('No Firstname', () => {
                post_and_status(url, signUpRoute, inValidRegisterModel.noFirstName, 400, "firstName should not be empty");
            });
            xit('No lastName', () => {
                post_and_status(url, signUpRoute, inValidRegisterModel.noLastName, 400, ["lastName should not be empppty"]);
            });
            xit('No email', () => {
                error = "[ 'email must be an email', 'email should not be empty' ]"
                post_and_status(url, signUpRoute, inValidRegisterModel.noEmail, 400, error);
            });
            it('Email with invalid format', () => {
                it('Email without .com', () => {
                    post_and_status(url, signUpRoute, inValidRegisterModel.noFormatEmail.noCom, 400, "email muste be an email");
                });
                it('Email without @', () => {
                    post_and_status(url, signUpRoute, inValidRegisterModel.noFormatEmail.noAt, 400, ["email must be an email"]);
                });
            });
            xit('No password', () => {
                post_and_status(url, signUpRoute, inValidRegisterModel.noPassword, 400, "password should not be empty");
            })
        });
//    });
});