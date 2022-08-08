const { use } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { stringify } = require('qs');
let expect = chai.expect;
chai.use(chaiHttp);

/**
 * 
 * @param {String} url 
 * @param {String} route 
 * @param {Object} body
 * @param {Number} expectedStatus 
 */

module.exports.get_and_status = (url, route, expectedStatus) => {
    chai.request(url)
        .get(route)
        .end((error, response) => {
            expect(response).to.have.status(expectedStatus);
        });
};

/**
 * 
 * @param {String} host 
 * @param {String} route 
 * @param {Object} body 
 * @param {Number} expectedStatus 
 */

module.exports.post_and_status = (host, route, body, expectedStatus, message) => {
    chai.request(host)
        .post(route)
        .send({ ...body })
        .end((error, response) => {
            expect(response).to.have.status(expectedStatus);
            if (message != undefined) {
                expect(response.body.message).to.deep.include(message);
            }
            done();
        });
};


/**
  * @param {String} host
  * @param {String} route
  * @param {Object} body
  * @param {Number} expectedStatus 
  */

module.exports.post_and_return = (host, route, body) => {
    chai.request(host)
        .post(route)
        .send({ ...body })
        .end((error, response) => {
            return response.body.data.accessToken;
        });
};

/**
  * @param {String} host
  * @param {String} route
  * @param {Object} body
  * @param {Number} expectedStatus 
  */

module.exports.getLoginToken = (host, route, body) => {
    let token = chai.request(host)
        .post(route)
        .send(body)
        .end((error, response) => {
            token = response.body.data.token;
            // return token;
        });
    return token;
};

/**
 * 
 * @param {String} url 
 * @param {String} route 
 * @param {Object} body
 * @param {Number} expectedStatus 
 */

module.exports.createEntity = (url, route, body, expectedStatus) => {
    chai.request(url)
        .post(route)
        .send(body)
        .end(function (err, res) {
            expect(res).to.have.status(expectedStatus);
        })
};

/**
 * 
 * @param {String} url 
 * @param {String} route
 * @param {Number} id
 * @param {} body
 * @param {Number} expectedStatus 
 */

module.exports.readEntity = (url, route, id, body, expectedStatus) => {
    let endpoint = route + "/" + id;
    chai.request(url)
        .post(endpoint)
        .send(body)
        .end(function (err, res) {
            expect(res).to.have.status(expectedStatus);
        })
};

/**
 * 
 * @param {String} url 
 * @param {String} route 
 * @param {Object} body
 * @param {Number} expectedStatus 
 */

module.exports.updateEntity = (url, route, id, body, expectedStatus) => {
    let endpoint = route + "/" + id;
    chai.request(url)
        .patch(endpoint)
        .send(body)
        .end(function (err, res) {
            expect(res).to.have.status(expectedStatus);
        })
};

/**
 * 
 * @param {String} url 
 * @param {String} route 
 * @param {Object} body
 * @param {Number} expectedStatus 
 */

module.exports.deleteEntity = (url, route, id, body, expectedStatus) => {
    let endpoint = route + "/" + id;
    chai.request(url)
        .delete(endpoint)
        .send(body)
        .end(function (err, res) {
            expect(res).to.have.status(expectedStatus);
        })
};

/**
 * 
 * @param {String} url 
 * @param {String} route
 * @param {} header
 * @param {} params
 * @param {Number} expectedStatus 
 */

module.exports.listOfEntities = (url, route, header, params, expectedStatus) => {
    chai.request(url)
        .post(endpoint)
        .send(body)
        .end(function (err, res) {
            expect(res).to.have.status(expectedStatus);
        })
};