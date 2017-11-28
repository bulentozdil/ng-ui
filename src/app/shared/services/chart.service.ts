import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HttpClientBase } from "../../core";

@Injectable()
export class ChartService extends HttpClientBase {

    constructor(client: HttpClient) {
        super({ httpClient: client });
    }
}