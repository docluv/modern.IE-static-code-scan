"use strict";

var Deferred = require('promised-io').Deferred;

var check = function (website) {
    var deferred = new Deferred();

    process.nextTick(function () {
        var result = {
            testName: "tooManyScripts",
            passed: website.js.length < 4,
            data: { scripts: website.js.length,
                comments: "There is no real reason why more than 3 scripts should be loaded. Bundle and minify, bundle & minify!!"
            }
        };
        deferred.resolve(result);
    });

    return deferred.promise;
};

module.exports.check = check;


