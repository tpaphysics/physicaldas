import React, { createContext, ReactNode, useContext } from "react";

import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface SidebarDrawerProvider {
  children: ReactNode;
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn);

export default function SidebarDrawerProvider({
  children,
}: SidebarDrawerProvider) {
  const disclosure = useDisclosure();
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
