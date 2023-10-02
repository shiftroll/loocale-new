const cookie = require('cookie');

const day = 3600000 * 24

module.exports = {
    createCookie: function(name, value, days = 7, secure = true) {
        return cookie.serialize(name, value, secure ? {
            secure: true,
            httpOnly: true,
            path: "/",
            maxAge: days * day,
            sameSite: "strict"
        } : {
            path: "/",
            maxAge: days * day
        })
    },
    deleteCookie: function(name, secure = true) {
        return cookie.serialize(name, "deleted", secure ? {
            secure: true,
            httpOnly: true,
            path: "/",
            expires: "Thu, 01 Jan 1970 00:00:00 GMT",
            sameSite: "strict"
        } : {
            path: "/",
            expires: "Thu, 01 Jan 1970 00:00:00 GMT",
        })
    },
    parseCookies: function(headers) {
        try {
            return cookie.parse(headers.cookie);
        } catch(e) {
            return {}
        }
        
    }
}