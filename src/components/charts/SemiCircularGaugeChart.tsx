import React from "react";
import dynamic from "next/dynamic";
import { Box, Flex, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
interface GaugeProps {
  colors: string[];
  series: number[];
  labels: string[];
  unit?: string;
}

export default function SemiCircularGaugeChart({
  colors,
  series,
  unit,
}: GaugeProps) {
  const options = {
    colors,
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        startAngle: -90,
        endAngle: 90,
        track: {
          background: theme.colors.gray[700],

          strokeWidth: "97%",
          margin: -1, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        dataLabels: {
          name: {
            fontSize: "12px",
            fontWeight: "bold",
            fontFamily: "Roboto",
            show: false,
          },
          value: {
            offsetY: -0,
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Roboto",
            color: theme.colors.gray[400],
            formatter(val: number) {
              return `${val}${unit || ""}`;
            },
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },

    //      fill: {
    //          type: 'gradient',
    //         gradient: {
    //            shade: 'light',
    //           shadeIntensity: 0.4,
    //          inverseColors: false,
    //        opacityFrom: 1,
    //      opacityTo: 1,
    //     stops: [0, 50, 53, 91]
    //     },
    // },

    labels: ["Average Results"],
  } as ApexOptions;

  return (
    <Flex w="100%" h="100%" align="center" justify="center">
      <Chart options={options} series={series} type="radialBar" height={190} />
    </Flex>
  );
}
