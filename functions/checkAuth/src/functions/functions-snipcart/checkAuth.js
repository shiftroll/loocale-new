const {parseCookies} = require("../lib/cookies");

exports.handler = async function (event, context) {
    // your server-side functionality
    const cookies = parseCookies(event.headers);

    console.log(cookies);
    return {
        statusCode: 302,
        headers: {
            Location: "/login",
            "X-Foo": "value-to-be-sent"
        }
    };
}