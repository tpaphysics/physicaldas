import React from "react";
import dynamic from "next/dynamic";
import { theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [
  {
    name: "Inflation",
    data: [1, 3.1, 4.0, 10.1, 4.0, 3.6, 2, 2.3, 5.4, 6, 1.5, 9.8],
  },
];

const options = {
  //  colors: [theme.colors.cyan[400]],

  chart: {
    height: 350,
    type: "bar",
    foreColor: theme.colors.gray[600],
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter(val: number) {
      return `${val}%`;
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: [theme.colors.gray[500]],
    },
  },
  grid: {
    show: false,
  },

  tooltip: {
    enabled: false,
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "botton",

    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter(val: number) {
        return `${val}%`;
      },
    },
  },
} as ApexOptions;

export default function BarChart() {
  return <Chart options={options} series={series} type="bar" height="160" />;
}
