import React from "react";
import dynamic from "next/dynamic";
import { Flex, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface GaugeProps {
  colors: string[];
  series: number[];
  labels: string[];
  unit?: string;
}

export default function CircleGaugeChart({
  colors,
  series,
  labels,
  unit,
}: GaugeProps) {
  const options = {
    // colors: [theme.colors.cyan[600]],

    colors,
    series: [70],
    chart: {
      height: 160,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 5,
          size: "90%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "12px",
            fontFamily: "Roboto",
            fontWeight: 600,
            color: theme.colors.gray[400],
            offsetY: -4,
          },
          value: {
            show: true,
            fontSize: "12px",
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: theme.colors.gray[400],
            offsetY: -2,
            formatter(val: number) {
              return `${val}${unit || ""}`;
            },
          },
        },
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: theme.colors.gray[700],
          strokeWidth: "97%",
          opacity: 1,
          margin: -14,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
      },
    },
    labels,
  } as ApexOptions;
  return (
    <Flex w="100%" h="100%" align="center" justify="center">
      <Chart options={options} series={series} type="radialBar" height="160" />
    </Flex>
  );
}
