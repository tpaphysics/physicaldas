import React from 'react'
import dynamic from 'next/dynamic'
import { theme } from '@chakra-ui/react';

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)

const series = [76, 67, 61, 90];
const options = {
    theme: {
        palette: 'palette10' // upto palette10
    },
    chart: {
        height: 390,
        type: 'radialBar',
    },

    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: false,
                }
            },
            track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: theme.colors.gray[700],
                strokeWidth: '97%',
                opacity: 1,
                margin: 3,
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5
                }
            },
        }
    },

    //colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],

    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
        fontWeight: 'bold',
        show: true,
        floating: true,
        fontSize: '12px',
        position: 'right',
        offsetX: 106,
        offsetY: -4
        ,
        labels: {
            useSeriesColors: true,
        },
        markers: {
            width: 8,
            height: 8
        },
        formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
            vertical: -1
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false
            }
        }
    }]
}

export default function AngleTwo() {
    return (

        <Chart options={options} series={series} type="radialBar" height={241} />
    )
}
