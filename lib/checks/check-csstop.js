
"use strict";

var Deferred = require('promised-io').Deferred;

var check = function (website) {
    var deferred = new Deferred();

    process.nextTick(function () {

        var cssBodyLinks = website.$('body link[rel="stylesheet"]'),
            bodyStyles = website.$('body style'),

            result = {
            testName: "cssattop",
            cssBodyLinks: cssBodyLinks.length,
            bodyStyles: bodyStyles.length,
            passed: (cssBodyLinks.length === 0) && (bodyStyles.length === 0)
        };
        deferred.resolve(result);
    });

    return deferred.promise;
};

module.exports.check = check;


