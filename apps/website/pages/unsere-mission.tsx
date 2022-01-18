import { DownloadIcon } from "@chakra-ui/icons";
import {
  Heading,
  Grid,
  GridItem,
  Box,
  AspectRatio,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Container,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import { Breadcrumb } from "@components/core";
import PageTitle from "@components/core/PageTitle";
import { Default } from "@components/layouts";
import Image from "next/image";

export default function UnsereMissionPage() {
  return (
    <>
      <PageTitle
        title="Wir über uns"
        description="Gemeinsam Gutes tun und Sinn stiften"
      />
      <Box as="section" pt="20" bg="white">
        <Breadcrumb
          items={[{ label: "Wir über uns", link: "/wir-ueber-uns" }]}
        />
      </Box>
      <Grid
        templateColumns="repeat(2, 1fr)"
        alignItems="center"
        background="white"
      >
        <GridItem colSpan={1} background="white">
          <AspectRatio ratio={3 / 2}>
            <Image src="/aushd.jpg" layout="fill" objectFit="cover" />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={1} background="gray.50">
          <Box p="28">
            <Heading>Wir sind die Bürgerstiftung</Heading>
            <Accordion pt="10">
              <AccordionItem padding={0}>
                <h2>
                  <AccordionButton px="0" py="5">
                    <Box flex="1" textAlign="left">
                      <Heading size="sm">Das Konzept</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} px="0">
                  Wir sind eine institutionell und finanziell unabhängige
                  gemeinnützige Stiftung von und für Bürgerinnen und Bürger mit
                  möglichst breitem Stiftungszweck. Wir en  gagieren uns
                  nachhaltig und dauerhaft für das Gemeinwesen vor Ort. Sie
                  unterstützt mit ihrer Arbeit bürgerschaftliches Engagement.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem padding={0}>
                <h2>
                  <AccordionButton px="0" py="5">
                    <Box flex="1" textAlign="left">
                      <Heading size="sm">Die Satzung</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} px="0">
                  Unsere Satzung ist der Maßstab unseres Handelns. In ihr haben
                  wir Struktur und Förderziele dauerhaft festgelegt. Unser
                  Förderzweck ist bewusst weit gefasst, damit wir möglichst
                  viele Anliegen der Potsdamer Stadtgesellschaft, heute und
                  morgen, angehen können.
                  <Button
                    mt="5"
                    size="sm"
                    rightIcon={<DownloadIcon />}
                    as="a"
                    href="/downloads/Satzung+aktuell.pdf"
                    target="_blank"
                  >
                    Satzung herunterladen
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding={0}>
                <h2>
                  <AccordionButton px="0" py="5">
                    <Box flex="1" textAlign="left">
                      <Heading size="sm">Die Organisation</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} px="0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding={0}>
                <h2>
                  <AccordionButton px="0" py="5">
                    <Box flex="1" textAlign="left">
                      <Heading size="sm">Die Prinzipien</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} px="0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding={0}>
                <h2>
                  <AccordionButton px="0" py="5">
                    <Box flex="1" textAlign="left">
                      <Heading size="sm">Unser Auftrag</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} px="0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </GridItem>
      </Grid>
      <Box as="section" background="white">
        <Container maxW="container.xl" py="16">
          <Text
            textTransform="uppercase"
            fontWeight="semibold"
            color="gray.600"
            fontSize="sm"
            pb="2"
          >
            Das Team
          </Text>
          <Heading>Der Vorstand</Heading>
        </Container>
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem>
            <AspectRatio ratio={3 / 4}>
              <Image
                src="/team/marie-luise-glahr.jpg"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
          </GridItem>
          <GridItem>
            <AspectRatio ratio={3 / 4}>
              <Image
                src="/team/felix-mueller-stueler.jpg"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
          </GridItem>
          <GridItem>
            <AspectRatio ratio={3 / 4}>
              <Image
                src="/team/elisabeth-diemer.jpg"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
          </GridItem>
          <GridItem>
            <AspectRatio ratio={3 / 4}>
              <Image
                src="/team/rosa-toledano.jpg"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

UnsereMissionPage.Layout = Default;
