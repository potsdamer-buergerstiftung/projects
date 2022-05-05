import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Breadcrumb } from "@components/core";
import PageTitle from "@components/core/PageTitle";
import ComingSoon from "@components/layouts/ComingSoon";

export default function ContactPage() {
  return (
    <>
      <PageTitle
        title="Kontakt"
        contentBottom
        description="Schreib uns, ruf an oder komm vorbei. Wir freuen uns auf dich."
      >
        <Button
          colorScheme="green"
          bg="brand"
          as="a"
          href="mailto:hallo@inselbuehne-potsdam.de"
        >
          Schreib uns eine E-Mail
        </Button>
      </PageTitle>
      <Box as="section" pt="20" bg="white">
        <Breadcrumb items={[{ label: "Kontakt", link: "/kontakt" }]} />
      </Box>
      <Box as="section" bg="white" pt="10" pb="20">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(5, 1fr)" gap={10}>
            <GridItem colSpan={2}>
              <Heading size="lg" mb="6">
                Telefon &amp; E-Mail
              </Heading>
              <Text fontWeight="bold">0331 23180309</Text>
              <Text fontWeight="bold">hallo@inselbuehne-potsdam.de</Text>
              <Text mt="5">Arbeitszeiten:</Text>
              <Text>Montag - Donnerstag</Text>
              <Text>9 Uhr - 15 Uhr</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Heading size="lg" mb="6">
                Komm vorbei
              </Heading>
              <Box>
                <Text fontWeight="bold">MAZ-Pyramide</Text>
                <Text>Friedrich-Engels-Straße 24</Text>
                <Text>14473 Potsdam</Text>
              </Box>
              <Box mt="8">
                <Text fontWeight="bold">Inselbühne</Text>
                <Text>Burgstraße 8</Text>
                <Text>14467 Potsdam</Text>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Heading size="lg" mb="6">
                Social Media
              </Heading>
              <VStack gap={0} align="start">
                <Link color="gray.700" href="https://instagram.com/inselbuehne">Facebook</Link>
                <Link color="gray.700" href="https://instagram.com/inselbuehne">Instagram</Link>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Divider />
    </>
  );
}

ContactPage.Layout = ComingSoon;
