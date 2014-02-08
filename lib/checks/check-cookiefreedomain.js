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


