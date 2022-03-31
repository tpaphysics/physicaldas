import dynamic from 'next/dynamic'
import { Box, Flex, theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)

interface GaugeProps {
    colors?: string[]
    series: number[]
    labels: string[]
    unit?: string
}


export default function AngleMultipleChart({ colors, series, labels, unit }: GaugeProps) {

    const options = {
        colors: colors,

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
                    size: '15%',
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
                    margin: 5,
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

        labels: labels,
        legend: {
            fontWeight: 'bold',
            fontFamily: "Roboto",
            show: true,
            floating: true,
            fontSize: '12px',
            position: 'right',
            offsetX: 106,
            offsetY: -9,
            labels: {
                useSeriesColors: true,

            },
            markers: {
                width: 8,
                height: 8,
                strokeColor: '#fff',

            },
            formatter: function (seriesName: string, opts: any) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + `${unit ? unit : ""}`
            },
            itemMargin: {
                vertical: -3
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
    } as ApexOptions

    return (
        <Flex w="100%" h="100%" align="center" justify="center">
            <Box w={280} m="0 auto">
                <Chart options={options} series={series} type="radialBar" height={180} />
            </Box>
        </Flex>
    )
}
