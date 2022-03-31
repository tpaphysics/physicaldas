import React from 'react'
import dynamic from 'next/dynamic'
import { theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)

interface GaugeProps {
    colors: string[]
    series: number[]
    labels: string[]
    unit?: string
}


export default function StrokedGaugeChart({ colors, series, labels, unit }: GaugeProps) {
    const options = {
        colors: colors,
        chart: {
            height: 350,
            type: 'radialBar',
            offsetY: -10,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 5,
                    size: '90%',
                    background: 'transparent',
                    image: undefined,
                },
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '12px',
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        color: theme.colors.gray[400],
                        offsetY: 67

                    },
                    value: {
                        offsetY: 35,
                        fontSize: '12px',
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        color: theme.colors.gray[400],
                        formatter: function (val: number) {
                            return val + `${unit ? unit : ""}`;
                        }
                    }
                }, track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: theme.colors.gray[700],
                    strokeWidth: '97%',
                    opacity: 1,
                    margin: -15,
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
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 3
        },
        labels: labels,
    } as ApexOptions



    return (
        <Chart options={options} series={series} type="radialBar" height="160" />
    )
}
