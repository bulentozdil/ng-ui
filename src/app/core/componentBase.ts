import { isDevMode, ReflectiveInjector, Injector, OnInit, AfterViewInit } from '@angular/core';

import { ComponentBaseArgs } from './componentBaseArgs';
import { InstanceFactory } from './instanceFactory';
import { environment } from '../../environments/environment';
import { ComponentLifecycleRegisterProvider } from "./lifecycleRegisterProvider";
import { CustomErrorHandler } from "./customErrorHandler";

declare var $: any;

export abstract class ComponentBase implements OnInit, AfterViewInit {

    protected __: ComponentLifecycleRegisterProvider;
    protected get Environment() { return environment; }

    constructor(public componentBaseArgs?: ComponentBaseArgs) {
        this.init();
    }

    /**
     * init lifecycle
     */
    private init() {
        this.__ = { ngOnInit: () => { } };
    }
    /**
     * ngOnInit
     */
    public ngOnInit() {
        if (this.isFunction(this.__.ngOnInit)) {
            this.__.ngOnInit();
        }
    }
    /**
     * ngAfterViewInit
     */
    public ngAfterViewInit() {
        if (this.isFunction(this.__.ngAfterViewInit)) {
            this.__.ngAfterViewInit();
        }
    }
    protected handleError(error: any, rethrowError?: boolean) {
        const errorHandler = new CustomErrorHandler(rethrowError);
        errorHandler.handleError(error);
    }
    protected resolveProvider(provider: any): any {
        const resolve = ReflectiveInjector.resolve([provider]);
        const injector = ReflectiveInjector.fromResolvedProviders(resolve);
        return injector.get(provider);
    }
    protected getInstance<TObject>(obj: any): TObject {
        return InstanceFactory.getInstance<TObject>(obj);
    }
    protected $(selector: string): any {
        return $(selector);
    }
    protected isProdMode(): boolean {
        return !isDevMode();
    }
    private isFunction(fn: Function) {
        if (fn && typeof fn === 'function') {
            return true;
        }
        return false;
    }
};

