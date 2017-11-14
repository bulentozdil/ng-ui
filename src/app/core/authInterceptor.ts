import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Cookie } from "ng2-cookies";
import { environment } from "../../environments/environment";

import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone(
            {
                headers: req.headers
                    .set("Authorization", `${Cookie.get(environment.accessToken)}`)
            });
        return next.handle(authReq).do((event: HttpEvent<any>) => { },
            (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 401) {
                        // bir önce ki auth işleminde cookie'ye eklenen parametreler silinir.
                        Cookie.delete(environment.accessToken);
                        this.router.navigate([environment.loginPath]);
                    }
                }
            }
        );
    }
}