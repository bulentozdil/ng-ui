import { Routes, RouterModule } from "@angular/router";

/**
 * Components
 */

import { HomeComponent } from "./home/home.component";
import { SecureComponent } from "./layouts/secure.component";
import { PublicComponent } from "./layouts/public.component";
import { LoginComponent } from "./auth/login.component";

const SECURE_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
];

const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'app', component: SecureComponent, children: SECURE_ROUTES },
    { path: 'public', component: PublicComponent, children: PUBLIC_ROUTES }
];

export const APP_ROUTING_MODULE = RouterModule.forRoot(APP_ROUTES, { useHash: true });