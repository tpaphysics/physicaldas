import React from 'react'
import dynamic from 'next/dynamic'
import { theme } from '@chakra-ui/react';

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)

const series = [
    { name: 'Teste1', data: [32, 129, 66, 70, 7, 12] }
]
const oprtions = {
    theme: {
        palette: 'palette1' // upto palette10
    },

    //colors: [theme.colors.cyan[600]],

    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
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
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-03-29T00:00:00.00z',
            '2021-03-30T00:00:00.00z',
            '2021-03-31T00:00:00.00z',
            '2021-04-01T00:00:00.00z',
            '2021-04-02T00:00:00.00z',
            '2021-04-03T00:00:00.00z',
        ],
    }
}


export default function LineCart() {
    return (
        <Chart type='area' options={oprtions} series={series} height="204px" />
    )
}
