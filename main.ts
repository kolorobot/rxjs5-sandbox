import {Observable} from "rxjs";
import {Http} from "./http";

const http = new Http();

let button = document.getElementById("ajax");
let source = Observable.fromEvent(button, "click")
    .flatMap(owner => http.get("json/owners/1.json"))
    .subscribe(
        value => console.log(value),
        e => console.log(e),
        () => console.log("Complete")
    );
