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
let accessToken = post_and_return(url, signInRoute, mockModel.valid.login);

let validRegisterModel = mockModel.valid.register;
let inValidRegisterModel = mockModel.invalid.register;