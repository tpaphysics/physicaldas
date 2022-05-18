import { Icon, VStack, Text, List } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Item = {
  name: string;
  icon: IconType;
};

interface SideBarItemProps {
  menuTitle: string;
  itens: Item[];
}

export default function SideBarCategoryMenu({
  menuTitle,
  itens,
}: SideBarItemProps) {
  return (
    <VStack align="flex-start" spacing={8}>
      <Text color="gray.300" fontSize="sm">
        {menuTitle.toUpperCase()}
      </Text>
      <VStack align="flex-start" fontSize="md">
        {itens.map((item, index) => (
          <Link href={`/${item.name.toLocaleLowerCase()}`} passHref>
            <List
              cursor="pointer"
              display="flex"
              _hover={{
                color: "yellow.400",
              }}
              alignItems="center"
              gap="4"
              key={index}
            >
              <Icon as={item.icon} />
              <Text>{item.name}</Text>
            </List>
          </Link>
        ))}
      </VStack>
    </VStack>
  );
}
