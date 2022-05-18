import {
  Flex,
  HStack,
  Image,
  Divider,
  useBreakpointValue,
  theme,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineUserAdd, AiOutlineBell } from "react-icons/ai";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import RounderInput from "../inputs/RounderInput";
import AvatarProfile from "./AvatarProfile";
import IconsBar from "./IconsBar";
import { useSidebarDrawer } from "../../hooks/SidebarHook";

export default function Header() {
  const [isLargerThan710] = useMediaQuery("(min-width: 710px)");
  const [isLargerThan560] = useMediaQuery("(min-width: 560px)");
  const [isLargerThan350] = useMediaQuery("(min-width: 350px)");

  const { onToggle, isOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h={20}
      mx="auto"
      mt={4}
      px={{ base: 2, sm: 4, lg: 6 }}
      align="center"
      justifyContent="space-between"
    >
      {isLargerThan350 && (
        <Image src="logoSmall.png" w={{ lg: "160px", base: "140px" }} />
      )}

      {isLargerThan710 && (
        <RounderInput
          size={isWideVersion ? "sm" : "xs"}
          ml={isWideVersion ? 6 : 0}
          mx={{ base: 2, sm: 2, lg: 0 }}
          placeholder="Search on platform"
          p={{ base: 4, lg: 6 }}
        />
      )}

      <HStack ml="auto" spacing={{ base: 2, lg: 6, sm: 4 }}>
        <IconsBar icons={[AiOutlineBell, AiOutlineUserAdd]} />
        <Divider orientation="vertical" h={8} />
        <AvatarProfile
          name="Thiago Pacheco"
          isShowDescription={isLargerThan560}
          email="physics.posgrad@gmail.com"
          avatarUrl="https://avatars.githubusercontent.com/u/46402647?v=4"
        />
        {!isWideVersion && (
          <Hamburger
            size={20}
            color={theme.colors.gray[300]}
            toggled={isOpen}
            onToggle={onToggle}
          />
        )}
      </HStack>
    </Flex>
  );
}
