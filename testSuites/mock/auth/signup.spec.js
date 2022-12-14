const { use } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { diffLines } = require('diff');
const expect = require('chai').expect;
require('dotenv').config();
chai.use(chaiHttp);

let { getAndStatus, postAndStatus } = require('../../../lib/common');
const url = `${process.env.URL_API_STG}`;

const { routes } = require('../../../routes');
const signInRoute = routes.auth.admin.login;
const signUpRoute = routes.auth.admin.register;

const { mockModel } = require('../../../testModels/mockModels');

const messageMissingCredential = "Missing credentials";
const messageWorngCredential = "INVALID_CREDENTIALS";

let validRegisterModel = mockModel.valid.register;
let inValidRegisterModel = mockModel.invalid.register;

describe('Sign Up Section', () => {
    describe('Valid Sign Up', () => {
        it('Valid Sign Up', (done) => {
            postAndStatus(url, signUpRoute, validRegisterModel, 200);
            done();
        });
    });
    describe('Invalid Sign Up', () => {
        describe('Check the required fields by not filling any data', () => {
            it('Email already taken', (done) => {
                postAndStatus(url, signUpRoute, validRegisterModel, 400, "EMAIL_ALREADY_TAKEN");
                done();
            });
            it('No Firstname', (done) => {
                postAndStatus(url, signUpRoute, inValidRegisterModel.noFirstName, 400, "firstName should not be empty");
                done();
            });
            it('No lastName', (done) => {
                postAndStatus(url, signUpRoute, inValidRegisterModel.noLastName, 400, "lastName should not be empty");
                done();
            });
            it('No email', (done) => {
                postAndStatus(url, signUpRoute, inValidRegisterModel.noEmail, 400, "email must be an email");
                postAndStatus(url, signUpRoute, inValidRegisterModel.noEmail, 400, "email should not be empty");
                done();
            });
            it('Email with invalid format', (done) => {
                it('Email without .com', (done) => {
                    postAndStatus(url, signUpRoute, inValidRegisterModel.noFormatEmail.noCom, 400, "email muste be an email");
                    done();
                });
                it('Email without @', (done) => {
                    postAndStatus(url, signUpRoute, inValidRegisterModel.noFormatEmail.noAt, 400, "email must be an email");
                    done();
                });
                done();
            });
            it('No password', (done) => {
                postAndStatus(url, signUpRoute, inValidRegisterModel.noPassword, 400, "password should not be empty");
                done();
            })
        });
    });
});