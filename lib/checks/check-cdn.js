

// ypes: ['js', 'css', 'image', 'cssimage', 'flash', 'favicon']

"use strict";

var Deferred = require('promised-io').Deferred,
    url = require('url'),
        hostNames = [],
        cdns = [],
        patterns = [
            '^([^\\.]*)\\.([^\\.]*)\\.yimg\\.com/[^/]*\\.yimg\\.com/.*$',
            '^([^\\.]*)\\.([^\\.]*)\\.yimg\\.com/[^/]*\\.yahoo\\.com/.*$',
            '^sec.yimg.com/',
            '^a248.e.akamai.net',
            '^[dehlps].yimg.com',
            '^(ads|cn|mail|maps|s1).yimg.com',
            '^[\\d\\w\\.]+.yimg.com',
            '^a.l.yimg.com',
            '^us.(js|a)2.yimg.com',
            '^yui.yahooapis.com',
            '^adz.kr.yahoo.com',
            '^img.yahoo.co.kr',
            '^img.(shopping|news|srch).yahoo.co.kr',
            '^pimg.kr.yahoo.com',
            '^kr.img.n2o.yahoo.com',
            '^s3.amazonaws.com',
            '^(www.)?google-analytics.com',
            '.cloudfront.net', //Amazon CloudFront
            '.ak.fbcdn.net', //Facebook images ebeded
            'platform.twitter.com', //Twitter widget - Always via a CDN
            'cdn.api.twitter.com', //Twitter API calls, served via Akamai
            'apis.google.com', //Google's API Hosting
            '.akamaihd.net', //Akamai - Facebook uses this for SSL assets
            '.rackcdn.com' //Generic RackSpace CloudFiles CDN
        ];

function getHostName(url) {

    var hostname = url.split('/')[2];

    return (hostname && hostname.split(':')[0]) || '';
}

function hostNameExist(hostName) {

    for (var i = 0; i < hostNames.length; i++) {

        if (hostNames[i] === hostName) {
            return true;
        }
    }

    return false;
}

function isCDN(hostName) {

    var re;

    for (var j = 0; j < patterns.length; j += 1) {
        re = new RegExp(patterns[j]);
        if (re.test(hostName)) {
            return true;
        }
    }

}


var check = function (website) {

    var deferred = new Deferred();

    process.nextTick(function () {

        var i = 0, href,
            scripts = website.$('script'),
            links = website.$('link');

        hostNames = [];
        cdns = [];

        for (i = 0; i < scripts.length; i++) {

            href = scripts[i].attribs.src;

            if (href) {

                var hn = getHostName(url.resolve(website.url, href));

                if (!hostNameExist(hn)) {
                    hostNames.push(hn);
                }

            }

        }

        for (i = 0; i < links.length; i++) {

            href = links[i].attribs.href;

            if (href) {

                var hn = getHostName(url.resolve(website.url, href));

                if (!hostNameExist(hn)) {
                    hostNames.push(hn);
                }
            }

        }

        for (i = 0; i < hostNames.length; i++) {

            if (isCDN(hostNames[i])) {
                cdns.push(hostNames[i]);
            }

        }

        var result = {
            testName: "usescdn",
            passed: cdns.length > 0,
            total: cdns.length,
            cdns: cdns
        };

        deferred.resolve(result);
    });

    return deferred.promise;
};

module.exports.check = check;


