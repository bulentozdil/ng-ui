
export interface EChartOptions {
    grid: {
        x: number,
        x2: number,
        y: number,
        y2: number
    };
    tooltip: {
        trigger: string
    };
    legend: {
        data: string[]
    };
    color: string[];
    calculable: boolean;
    xAxis: [
        {
            type: string,
            boundaryGap: boolean,
            data: any[]
        }];
    yAxis: [
        {
            type: string,
            axisLabel: {
                formatter: string
            }
        }];
    series?: [
        {
            name: string;
            /**
             * @requires 
             * # type alanı chart türünü belirtir;
             * 
             * line,bar,pie,scatter,effectScatter,radar,tree,
             * treemap,boxplot,candlestick,heatmap,map,parallel,lines,graph,sankey,
             * funnel,gauge,pictorialBar,themeRiver,custom
             */
            type: string;
            data: any;
            markLine: {
                data: [
                    {
                        /**
                         * type alanı 'min','max','average' olabilir.
                         */
                        type: string,
                        /**
                         * name alanı herhangi bir değer olabilir.
                         */
                        name: string
                    }
                ]
            }
        }
    ];
}
