import { Injectable, Component } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Http } from '@angular/http';

import { Cookie } from 'ng2-cookies/ng2-cookies';
import { environment } from '../../environments/environment';

@Injectable()
export class LoggedInRoute implements CanActivate {
    constructor(
        public router: Router) {
    }

    canActivate() {
        if (Cookie.get(environment.accessToken) !== null) {
            return true;
        }
        this.router.navigate([environment.loginPath]);
        return false;
    }
};
