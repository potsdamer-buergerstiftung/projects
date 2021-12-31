import { PBSLogo } from "ui";
import { Box, Container, Stack, Flex, Link, VStack } from "@chakra-ui/layout";
import { FC } from "react";
import RouterLink from "next/link";
import { Button } from "@chakra-ui/button";
import NavbarItem from "./NavbarItem";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useUI } from "@components/context";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";
import { IconButton } from "@chakra-ui/react";

const navItems = [
  {
    href: "/unsere-mission",
    text: "Unsere Mission",
  },
  {
    href: "/projekte",
    text: "Projekte",
  },
  {
    href: "/aktuelles",
    text: "Aktuelles",
  },
  {
    href: "/kontakt",
    text: "Kontakt",
  },
  {
    href: "/shop",
    text: "Shop",
  },
];

const Navbar: FC = () => {
  const { openMobileMenu, displayMobileMenu } = useUI();

  const showNavigationMenuButton = useBreakpointValue({
    base: true,
    lg: false,
  });
  const showActionButton = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <>
      {showNavigationMenuButton && (
        <AnimatePresence>
          {displayMobileMenu && <MobileMenu items={navItems} />}
        </AnimatePresence>
      )}
      <Box as="header" position="absolute" w="100%" zIndex="1000">
        <Container px={{ base: "1rem", xl: 16 }} maxW="100%">
          <Stack direction="row" justify="space-between" align="center">
            <Stack
              direction="row"
              justify="space-between"
              align="center"
              spacing="8"
            >
              {showNavigationMenuButton && (
                <IconButton
                  aria-label="Open Menu"
                  rounded="full"
                  onClick={openMobileMenu}
                  variant="unstyled"
                  icon={
                    <VStack
                      spacing="1.5"
                      display={{ base: "block", lg: "none" }}
                      p="1"
                    >
                      <Box h="2px" bg="secondary" w="20px" />
                      <Box h="2px" bg="secondary" w="20px" />
                    </VStack>
                  }
                />
              )}
              <RouterLink href="/" passHref>
                <Link _focus={{ outline: "none" }}>
                  <PBSLogo height={{ base: 8, md: 9, lg: 10 }} my="8" />
                </Link>
              </RouterLink>
            </Stack>
            <Box display={{ base: "none", lg: "block" }}>
              <Flex
                as="nav"
                w="100%"
                justify="flex-end"
                direction={{ base: "column", lg: "row" }}
              >
                {navItems.map((item, i) => (
                  <NavbarItem
                    href={item.href}
                    text={item.text}
                    key={i}
                    index={i + 1}
                  />
                ))}
              </Flex>
            </Box>
            {showActionButton && (
              <Button background="background" color="secondary">
                Freund:in werden
              </Button>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
