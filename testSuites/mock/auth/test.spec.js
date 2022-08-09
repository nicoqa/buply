const { use } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
require('dotenv').config();
chai.use(chaiHttp);

const { routes } = require('../../../routes');
const url = `${process.env.URL_API_STG}`;
let { getAndStatus, postAndReturn, postAndStatus } = require('../../../lib/common');

function ok() {
    expect(1).to.equal(1);
};
function noOk() {
    expect(1).to.equal(0);
};


describe('Describe', () => {
    it('It', (done) => {
        expect(1).to.equal(1);
        ok();
        done();
    });
    describe('Describe Interno', () => {
        it('It Interno', (done) => {
            expect(1).to.equal(1);
            ok();
            done();
        });
        it('It Interno', (done) => {
            expect(1).to.equal(1);
            ok();
            done();
        });
    });
    it('It2', (done) => {
        expect(1).to.equal(1);
        done();
    });
});

describe('TestAPI', () => {
    it('Se recibe una respuesta 200?',(done) => {
        getAndStatus(url,"",200);
        done();
        })
})