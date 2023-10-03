const Tokens = require('csrf');
const { parseCookies } = require('./cookies');

const tokens = new Tokens();

function createCSRF() {
    const secret = tokens.secretSync()

    const token = tokens.create(secret);

    return {secret, token, expires: Date.now() + (3600000 * 24 * 14)};
}

function validateToken(token, secret) {
    return tokens.verify(secret, token)
}

function validateEvent(event) {
    try {
        const token = JSON.parse(event.body)._csrf;
        const secret = parseCookies(event.headers)._csrf_s;
        return validateToken(token, secret);
    } catch(e) {
        return false;
    }
}

module.exports = {
    createCSRF,
    validateToken,
    validateEvent
}