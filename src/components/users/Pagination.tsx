import React from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <HStack paddingTop={8} justify="space-between">
      <Box>
        <Text fontWeight="bold" as="span">
          0 - 5 of 100
        </Text>
      </Box>
      <HStack spacing={4}>
        <Button
          size="sm"
          w="4"
          fontSize="xs"
          _hover={{
            bgColor: "yellow.700",
          }}
          disabled
          _disabled={{
            bgColor: "yellow.700",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          w="4"
          fontSize="xs"
          variant="unstyled"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          w="4"
          fontSize="xs"
          variant="unstyled"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
        <Text>...</Text>
        <Button
          size="sm"
          w="4"
          fontSize="xs"
          variant="unstyled"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}
