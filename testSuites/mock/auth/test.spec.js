const { use } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
require('dotenv').config();
chai.use(chaiHttp);

const { routes } = require('../../../routes');
const url = `${process.env.URL_API_STG}`;
let { get_and_status, post_and_return, post_and_status } = require('../../../lib/common');

function ok() {
    expect(1).to.equal(1);
};
function noOk() {
    expect(1).to.equal(0);
};


/* describe('Describe', () => {
    it('It', () => {
        expect(1).to.equal(1);
        noOk();
    });
    describe('Describe Interno', () => {
        it('It Interno', () => {
            expect(1).to.equal(1);
            ok();
        });
        it('It Interno', () => {
            expect(1).to.equal(1);
            noOk();
        });
    });
    it('It2', () => {
        expect(1).to.equal(1);
    });
}); */

describe('TestAPI', () => {
    it('Se recibe una respuesta 200?',() => {
        get_and_status(url,"",200);
    })
})