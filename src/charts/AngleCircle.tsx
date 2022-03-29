import React from 'react'
import dynamic from 'next/dynamic'
import { theme } from '@chakra-ui/react';

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)

const series = [44, 55, 67];
const options = {
    colors: [theme.colors.yellow[600], theme.colors.orange[600], theme.colors.teal[600]],

    chart: {
        height: 320,
        type: 'radialBar',
    },
    theme: {
        palette: 'palette10' // upto palette10
    },
    plotOptions: {

        radialBar: {
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',


            },
            track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: theme.colors.gray[700],

                strokeWidth: '97%',
                opacity: 1,
                margin: 6,
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5
                }
            },

            dataLabels: {
                color: 'white',
                name: {
                    fontSize: '22px',

                },
                value: {
                    fontSize: '16px',
                    color: theme.colors.gray[500],
                    offsetY: 8,
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (data = series) {
                        const soma = series.reduce((soma, i) =>
                            soma + i
                        )
                        return soma
                    }
                }
            }
        }
    },

    //colors: ['#1ab7ea', '#0084ff', '#39539E'],

    labels: ['Apples', 'Oranges', 'Bananas', 'Berries', "Blueberries"],
}

export default function AngleCircle() {
    return (

        <Chart options={options} series={series} type="radialBar" height={240} />
    )
}
