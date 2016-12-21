import {Observable} from "rxjs";

export class Http {

    /**
     * Execute an AJAX request returning an Observable
     *
     * @param url
     * @returns Observable
     */
    get(url: string): Observable<any> {
        return Observable.create(observer => {
            let xhr = new XMLHttpRequest();
            xhr.addEventListener("load", () => {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            });
            xhr.open("GET", url);
            xhr.send();
        });
    }
}