import { Box, Flex, SimpleGrid, Text, theme, VStack } from "@chakra-ui/react";

import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import SideBar from "../components/sidebar/SideBar";
import Header from "../components/header/Header";
import LineCart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";

import CardGaugeChart from "../components/cards/CardGaugeChart";

export default function Dashboard() {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex
        w="100%"
        my={{ base: 4, lg: 6 }}
        mx="auto"
        maxWidth="1480"
        px={{ base: 2, sm: 4, lg: 6 }}
        flex="1"
      >
        <SideBar />
        <VStack w="100%" spacing={{ base: 2, sm: 4, lg: 4 }}>
          <SimpleGrid
            width="100%"
            gap={{ base: 2, sm: 4, lg: 4 }}
            minChildWidth="320px"
            alignItems="flex-start"
          >
            <Flex p={8} bg="gray.800" borderRadius={8} flexDir="column">
              <Text>Registered in the day </Text>
              <LineCart />
            </Flex>
            <Box p={8} bg="gray.800" borderRadius={8}>
              <Text>User accesses month</Text>
              <BarChart />
            </Box>
          </SimpleGrid>
          <SimpleGrid
            width="100%"
            gap={{ base: 2, sm: 4, lg: 4 }}
            minChildWidth="320px"
            alignItems="flex-start"
            flex="1"
          >
            <CardGaugeChart
              title="Presons type"
              type="angleMultiplesGauge"
              colors={[theme.colors.orange[400]]}
              series={[10, 30, 60, 90]}
              labels={["Boy", "Girls", "Childrens", "Natives"]}
              unit="%"
            />
            <CardGaugeChart
              title="Infra capacity"
              type="strokedGauge"
              colors={[theme.colors.yellow[300]]}
              series={[75]}
              labels={["Resources"]}
              unit="%"
            />
            <CardGaugeChart
              title="Access"
              type="circleGauge"
              colors={[theme.colors.green[300]]}
              series={[90]}
              labels={["Persons"]}
              unit="/hour"
            />
          </SimpleGrid>
        </VStack>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { "phisicaldash.token": token } = parseCookies(ctx);
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
};
