"use strict";
var rxjs_1 = require("rxjs");
var http_1 = require("./http");
var http = new http_1.Http();
var button = document.getElementById("ajax");
var source = rxjs_1.Observable.fromEvent(button, "click")
    .flatMap(function (owner) { return http.get("json/owners/1.json"); })
    .subscribe(function (value) { return console.log(value); }, function (e) { return console.log(e); }, function () { return console.log("Complete"); });
//# sourceMappingURL=main.js.map