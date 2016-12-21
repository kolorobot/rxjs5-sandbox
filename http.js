"use strict";
var rxjs_1 = require("rxjs");
var Http = (function () {
    function Http() {
    }
    /**
     * Execute an AJAX request returning an Observable
     *
     * @param url
     * @returns Observable
     */
    Http.prototype.get = function (url) {
        return rxjs_1.Observable.create(function (observer) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", function () {
                var data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            });
            xhr.open("GET", url);
            xhr.send();
        });
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=http.js.map