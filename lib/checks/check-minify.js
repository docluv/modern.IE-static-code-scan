//isMinified: function (contents) {
//    var len = contents.length,
//        striplen;

//    if (len === 0) { // blank is as minified as can be
//        return true;
//    }

//    // TODO: enhance minifier logic by adding comment checking: \/\/[\w\d \t]*|\/\*[\s\S]*?\*\/
//    // even better: add jsmin/cssmin
//    striplen = contents.replace(/\n| {2}|\t|\r/g, '').length; // poor man's minifier
//    if (((len - striplen) / len) > 0.2) { // we saved 20%, so this component can get some mifinication done
//        return false;
//    }

//    return true;
//}

