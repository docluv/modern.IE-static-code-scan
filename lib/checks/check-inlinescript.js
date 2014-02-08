"use strict";

var Deferred = require('promised-io').Deferred;

var check = function (website) {
    var deferred = new Deferred();

    process.nextTick(function () {

        var inlineScripts = website.$('script:not([src])');

        var result = {
            testName: "inlineScripts",
            passed: inlineScripts.length < 3,
            data: { scripts: inlineScripts.length,
                comments: "There is no real reason why more than 2 inline scripts. Make scripts external"
            }
        };
        deferred.resolve(result);
    });

    return deferred.promise;
};

module.exports.check = check;


