
import { HttpParams, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/retry';

import { HttpClientBaseArgs } from "./httpClientBaseArgs";
import { HttpClientResponseFunction } from "./httpClientResponseFunction";
import { environment } from "../../environments/environment";

export class HttpClientBase{

    constructor(private args:HttpClientBaseArgs){
    }

    public get<T>(method: string, params: HttpParams, callback: HttpClientResponseFunction, retryCount: number = 1) {
        this.args.httpClient
            .get(environment.apiUrl + method, { params: params })
            .retry(retryCount)
            .subscribe((data: T) => {
                callback(null, data);
            }, (error: HttpErrorResponse) => {
                this.errorHandler(error, callback);
            });
    }

    public post<T, R>(method: string, body: T, callback: HttpClientResponseFunction, headers: HttpHeaders = null) {
        this.args.httpClient
            .post(environment.apiUrl + method, body, { headers: headers })
            .subscribe((data: R) => {
                callback(null, data);
            }, (error: HttpErrorResponse) => {
                this.errorHandler(error, callback);
            });
    }

    public put<T, R>(method: string, body: T, callback: HttpClientResponseFunction, headers: HttpHeaders = null) {
        this.args.httpClient
            .put(environment.apiUrl + method, body, { headers: headers })
            .subscribe((data: R) => {
                callback(null, data);
            }, (error: HttpErrorResponse) => {
                this.errorHandler(error, callback);
            });
    }

    public delete<T>(method: string, params: HttpParams, callback: HttpClientResponseFunction, headers: HttpHeaders = null) {
        this.args.httpClient
            .delete(environment.apiUrl + method, { params: params, headers: headers })
            .subscribe((data: T) => {
                callback(null, data);
            }, (error: HttpErrorResponse) => {
                this.errorHandler(error, callback);
            });
    }

    private errorHandler(error: any, callback: HttpClientResponseFunction) {
        if (error.error instanceof Error) {
            callback(error, null);
        } else {
            callback(error, null);
        }
    }
}