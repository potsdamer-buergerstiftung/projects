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
import { Default } from "@components/layouts";

export default function ContactPage() {
  return (
    <>
      <PageTitle
        title="Kontakt"
        contentBottom
        description="Hinterlasse uns ein paar Infos und wir melden uns bei dir. "
      >
        <Button colorScheme="green" bg="brand">
          Schreib uns eine E-Mail
        </Button>
      </PageTitle>
      <Box as="section">
        <Breadcrumb items={[{ label: "Kontakt", link: "/kontakt" }]} />
      </Box>
      <Box as="section" bg="white" pt="10" pb="20">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(5, 1fr)" gap={10}>
            <GridItem colSpan={2}>
              <Heading size="md" mb="5">
                Kontakt aufnehmen
              </Heading>
              <Text>Allgemeine Fragen</Text>
              <Text fontWeight="bold">0331 23180300</Text>
              <Text fontWeight="bold">info@potsdamer-buergerstiftung.org</Text>
              <Text mt="5">Arbeitszeiten:</Text>
              <Text>Montag - Freitag</Text>
              <Text>9 Uhr - 15 Uhr</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Heading size="md" mb="5">
                Vorbeikommen
              </Heading>
              <Text>
                Friedrich-Engels-Straße 24, <br />
                14473 Potsdam, <br />
                Deutschland
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Heading size="md" mb="5">
                Social Media
              </Heading>
              <VStack gap={0} align="start">
                <Link color="gray.700">Facebook</Link>
                <Link color="gray.700">Instagram</Link>
                <Link color="gray.700">YouTube</Link>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Divider />
    </>
  );
}

ContactPage.Layout = Default;
