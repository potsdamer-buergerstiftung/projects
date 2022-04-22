import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import ComingSoon from "@components/layouts/ComingSoon";

export default function ComingSoonPage() {
  return (
    <>
      <Box bg="white" position="absolute">
        <Image
          src="/undraw_city_life_gnpr.svg"
          alt="Illustration"
          height="100vh"
          objectFit="cover"
        />
      </Box>
      <Box
        bg="whiteAlpha.800"
        px={{ base: 4, md: 8, lg: 12 }}
        pt="30vh"
        position="absolute"
        left={{ base: "0", md: "50%" }}
        right="0"
        top="0"
        bottom="0"
        height="100vh"
      >
        <Container maxW="lg">
          <Heading>
            <Box color="green.500" as="span">
              Wir sind gerade mit Umbauarbeiten beschäftigt,{" "}
            </Box>
            <br />
            schau gerne die nächsten Tage wieder vorbei.
          </Heading>
        </Container>
      </Box>
    </>
  );
}

ComingSoonPage.Layout = ComingSoon;
