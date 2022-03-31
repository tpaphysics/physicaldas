import React from 'react'
import dynamic from 'next/dynamic'
import { theme } from '@chakra-ui/react';

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)

interface GenerateDataProps {
    min: number,
    max: number

}
function generateData(count: number, yrange: GenerateDataProps) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}


const series = [{
    name: 'Metric1',
    data: generateData(40, {
        min: 0,
        max: 90
    })
},
{
    name: 'Metric2',
    data: generateData(40, {
        min: 0,
        max: 90
    })
},
{
    name: 'Metric3',
    data: generateData(40, {
        min: 0,
        max: 90
    })
},
{
    name: 'Metric4',
    data: generateData(40, {
        min: 0,
        max: 90
    })
}
]

const options = {
    theme: {
        palette: 'palette10' // upto palette10
    },

    //colors: ["#008FFB"],

    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[400]
    },

    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'Time',
        categories: [],
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },

    }

}




export default function HeatMapChart() {
    return (
        <Chart options={options} series={series} type="heatmap" height='120' />

    )
}






