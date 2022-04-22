import { FC } from "react";
import { Navbar, Footer } from "@components/core";
import {
  Box,
  useColorModeValue as mode,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { SocialLinks } from "@components/misc";
import CookieBanner from "@components/misc/CookieBanner";
import ScrollProgressIndicator from "@components/misc/ScrollProgressIndicator";
import { useAcceptCookies } from "@lib/hooks/useAcceptCookies";
import { useShowBackButtonState } from "./state";
import BackButton from "@components/misc/BackButton";

const Layout: FC = ({ children }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  const [showBackButton] = useShowBackButtonState();

  const showSocialLinks = useBreakpointValue({ base: false, xl: true });
  const showScrollProgressIndicator = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <>
      <Navbar />
      {showBackButton && showScrollProgressIndicator && (
        <Box
          zIndex={1000}
          top="100px"
          position="fixed"
          left={{ base: "1rem", xl: 12 }}
        >
          <BackButton />
        </Box>
      )}
      {showSocialLinks && (
        <Flex
          position="fixed"
          zIndex="10"
          right="4.4vh"
          transformOrigin="right top"
          transform="rotate(-90deg) translate(50%, -100%)"
          top="50%"
          align="center"
          minH="56px"
          float="right"
        >
          <SocialLinks />
        </Flex>
      )}
      {showScrollProgressIndicator && (
        <Flex
          position="fixed"
          zIndex="10"
          left={{ base: "1rem", xl: 16 }}
          transformOrigin="left top"
          transform="rotate(-90deg) translate(-50%, 0)"
          top="50%"
          align="center"
          float="left"
        >
          <ScrollProgressIndicator />
        </Flex>
      )}
      <Box as="main" bg={mode("green.100", "black")}>
        {children}
      </Box>
      <Footer />
      {/* {!acceptedCookies && <CookieBanner onAcceptCookies={onAcceptCookies} />} */}
    </>
  );
};

export default Layout;
