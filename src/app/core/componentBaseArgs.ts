import { NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface ComponentBaseArgs {
    route?: ActivatedRoute;
    router?: Router;
    zone?: NgZone;
    model?: any;
};