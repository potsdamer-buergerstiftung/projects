import {
    Box, Button, Container,
    Stack, useColorModeValue as mode
} from "@chakra-ui/react";
import { FC } from "react";
import { PBSLogo } from "ui";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Box as="header" position="absolute" w="100%" zIndex="1000">
        <Container px={{ base: "1rem", xl: 16 }} maxW="100%">
          <Stack direction="row" justify="space-between" align="center">
            <Stack
              direction="row"
              justify="space-between"
              align="center"
              spacing="4"
            >
              <PBSLogo height={{ base: 8, md: 9, lg: 10 }} my="8" />
            </Stack>
            <Button background="background" color="secondary">
              Kontakt
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box as="main" bg={mode("green.100", "black")}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
