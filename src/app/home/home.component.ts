import { Component } from "@angular/core";

import { ComponentRootBase } from "../core";
import { EChartOptions } from "../shared/components/charts";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent extends ComponentRootBase {

    public options: EChartOptions;

    constructor() {
        super({});

        this.__.ngOnInit = () => {
            this.setChartOptions();
        };
    }

    setChartOptions() {
        this.options = {
            grid: {
                x: 40,
                x2: 40,
                y: 35,
                y2: 25
            },
            tooltip: { trigger: 'axis' },
            legend: { data: ['Maximum', 'Minimum'] },
            color: ['#EF5350', '#66BB6A'],
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            }],
            series: [
                {
                    name: 'Maximum',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10],
                    markLine: {
                        data: [{
                            type: 'average',
                            name: 'Average'
                        }]
                    }
                },
                {
                    name: 'Minimum',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markLine: {
                        data: [{
                            type: 'average',
                            name: 'Average'
                        }]
                    }
                }
            ]
        };
    }
}