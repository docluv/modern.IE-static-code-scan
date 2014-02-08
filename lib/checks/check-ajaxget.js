"use strict";

var Deferred = require('promised-io').Deferred;

var check = function (website) {
    var deferred = new Deferred();

    process.nextTick(function () {

//        var inlineScripts = website.$('script:not([src])');

        var result = {
            testName: "ajaxget",
            passed: true
        };
        deferred.resolve(result);
    });

    return deferred.promise;
};

module.exports.check = check;


