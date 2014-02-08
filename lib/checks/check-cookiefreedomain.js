//YSLOW.Component.prototype.getSetCookieSize = function () {
//    // only return total size of cookie received.
//    var aCookies, k,
//        size = 0;

//    if (this.headers && this.headers['set-cookie']) {
//        aCookies = this.headers['set-cookie'].split('\n');
//        if (aCookies.length > 0) {
//            for (k = 0; k < aCookies.length; k += 1) {
//                size += aCookies[k].length;
//            }
//        }
//    }

//    return size;
//};

"use strict";

var Deferred = require('promised-io').Deferred;

var check = function (website) {
    var deferred = new Deferred();

    process.nextTick(function () {

//        var inlineScripts = website.$('script:not([src])');

        var result = {
            testName: "cookiefreedomain",
            passed: true
        };
        deferred.resolve(result);
    });

    return deferred.promise;
};

module.exports.check = check;



