//max elements 900 via YSlow

"use strict";

var Deferred = require('promised-io').Deferred;

var check = function (website) {
    var deferred = new Deferred();

    process.nextTick(function () {

        var elems = website.$('*');

        var result = {
            testName: "toomanyelements",
            elements: elems.length,
            passed: elems.length > 900
        };
        deferred.resolve(result);
    });

    return deferred.promise;
};

module.exports.check = check;




