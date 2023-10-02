const { createCookie } = require("../lib/cookies");
const { createCSRF } = require("../lib/csrf");


exports.handler = async function(event, context) {

    const {secret, token, expires} = createCSRF();

    return {
        statusCode: 200,
        headers: {
            "Set-Cookie": createCookie("_csrf_s", secret, 14)
        },
        body: JSON.stringify({token, expires})
    };
}