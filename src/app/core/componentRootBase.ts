import { AfterViewInit, AfterContentInit, ElementRef, ErrorHandler } from '@angular/core';
import { NavigationExtras } from "@angular/router";

import { Cookie } from "ng2-cookies";
import { ComponentBaseArgs } from './componentBaseArgs';
import { ComponentBase } from './componentBase';

export abstract class ComponentRootBase extends ComponentBase {

    constructor(public componentBaseArgs: ComponentBaseArgs) {
        super(componentBaseArgs);
    }

    protected onRedirectToRoute(commands: any, extras?: NavigationExtras) {
        this.componentBaseArgs.router.navigate([commands], extras);
    }
    protected handleError(error: any, showAlert?: boolean, rethrowError?: boolean) {
        switch (error.status) {
            case 401: {
                Cookie.delete(this.Environment.accessToken);
                this.componentBaseArgs.zone.run(() => this.onRedirectToRoute(this.Environment.loginPath));
            } break;
            default: {
                super.handleError(error, rethrowError);

            }
        }
    } 
    protected scrollIntoView(container: ElementRef) {
        if (container) {
            container.nativeElement.scrollIntoView();
        }
    }
};
