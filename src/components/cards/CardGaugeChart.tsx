
import { Flex, Text } from '@chakra-ui/react'
import AngleMultipleChart from '../charts/AngleMultiplesChart'
import CircleGaugeChart from '../charts/CircleGaugeChart'
import SemiCircularGaugeChart from '../charts/SemiCircularGaugeChart'
import StrokedGaugeChart from '../charts/StrokedGaugeChart'

interface GaugeProps {
  colors: string[]
  series: number[]
  labels: string[]
  unit?: string
}


interface CardGaugeChartProps extends GaugeProps {
  title: string,
  type: 'strokedGauge' | 'circleGauge' | 'semiCircularGauge' | 'angleMultiplesGauge'
}

export default function CardGaugeChart({ title, type, colors, series, labels, unit }: CardGaugeChartProps) {
  const options = {
    strokedGauge: <StrokedGaugeChart colors={colors} series={series} labels={labels} unit={unit} />,
    circleGauge: <CircleGaugeChart colors={colors} series={series} labels={labels} unit={unit} />,
    semiCircularGauge: <SemiCircularGaugeChart colors={colors} series={series} labels={labels} unit={unit} />,
    angleMultiplesGauge: <AngleMultipleChart colors={colors} series={series} labels={labels} unit={unit} />
  }

  return (
    <Flex p={8} bg="gray.800" borderRadius={8} justify="center" flexDir="column" h="100%">
      <Text>{title}</Text>
      {options[type]}
    </Flex>
  )
}

