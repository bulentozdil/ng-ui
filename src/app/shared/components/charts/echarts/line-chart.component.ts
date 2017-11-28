import { Component, Input, ElementRef, ViewChild, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import * as echarts from 'echarts';

import { ChartService } from "../../../services/chart.service";
import { EChartOptions } from "./echart-option";
import { ECHART_THEME } from "./echart-theme";

type EndPointMethods = "get" | "post" | "put" | "delete";

@Component({
    selector: 'ehart-line',
    template: `
    <div class="content">
            <div class="panel panel-flat">
            <div class="panel-heading">
                <h5 class="panel-title">Basic line</h5>
                <div class="heading-elements">
                    <ul class="icons-list">
                        <li><a data-action="collapse" *ngIf="showCollapse"></a></li>
                        <li><a data-action="reload"   *ngIf="showReload"></a></li>
                        <li><a data-action="close"    *ngIf="showClose"></a></li>
                    </ul>
                </div>
            </div>
            LineChartOptions
            <div class="panel-body">
                <div class="chart-container">
                    <div class="chart has-fixed-height" id="basic_lines" #basic_lines></div>
                </div>
            </div>
        </div>
    </div>
    `
})
export class LineChartComponent implements OnInit, OnChanges {

    @Input('show-collapse') showCollapse: boolean = false;
    @Input('show-reload') showReload: boolean = false;
    @Input('show-close') showClose: boolean = false;

    @Input('end-point') endPoint: string;
    @Input('end-point-metohd') endPointMethod: EndPointMethods;
    @Input('end-point-params') endPointParams: HttpParams
    @Input('options') options: EChartOptions;
    @Input('data') data: any;

    @ViewChild('basic_lines') basicLines: ElementRef;

    constructor(public chartService: ChartService) { }

    ngOnInit() {
        this.init();
    }

    ngOnChanges(changes?: SimpleChanges) {

        if (changes != null) {
            this.setOptions(changes['options'].currentValue);
            if (changes['endPoint']) {
                this.endPoint = changes['end-point'].currentValue;
            }
            if (changes['endPointMethod']) {
                this.endPointMethod = changes['end-point-method'].currentValue;
            }
            if (changes['endPointParams']) {
                this.endPointParams = changes['end-point-params'].currentValue;
            }
        }
    }

    init() {
        const chartInstance = echarts.init(this.basicLines.nativeElement, ECHART_THEME);
        if (this.endPoint) {
            this.getData((error, data) => {
                if (!error) {
                    this.options.series = data;
                    this.prepareChart(chartInstance);
                }
            });
        } else {
            this.prepareChart(chartInstance);
        }
    }

    prepareChart(chartInstance: any) {
        chartInstance.setOption(this.options);
        window.onresize = () => {
            setTimeout(() => {
                chartInstance.resize();
            }, 200);
        };
    }

    setOptions(options: EChartOptions) {
        if (options != null) {
            this.options = options;
        }
    }

    getData(callback: (error, data?) => void) {

        switch (this.endPointMethod) {
            case 'get':
                this.chartService.get(this.endPoint, this.endPointParams, (error, data) => {

                    if (error) {
                        callback(console.log(`Line chart chartService.get error. 
                                                endPoint:${this.endPoint} endPointParams:${this.endPointParams}`));

                    } else {
                        callback(null, data);
                    }
                });
                break;
            case 'post':
            case 'put':
                break;
            case 'delete':
                break
        }
    }
} 