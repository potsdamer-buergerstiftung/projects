import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
  Wrap,
} from "@chakra-ui/layout";
import { Default } from "@components/layouts";
import { ProjectGrid } from "@components/project";
import projects from "@config/projects.json";

const mappedProjects = projects.map((project) => ({
  ...project,
  link: `/projekte/${project.slug}`,
}));

export default function Home() {
  return (
    <>
      <Box w="full" pt="40" pb="10" zIndex="2" bg="white">
        <Container maxW="container.xl">
          <Heading color="secondary" size="4xl" mb="6">
            Brücken bauen,
            <br /> Menschen verbinden
            <Text as="span" color="#38A169" lineHeight="inherit">
              .
            </Text>
          </Heading>
          <Text>
            Wir sind die Potsdamer Bürgerstiftung und fördern als
            Mitmach-Stiftung ehrenamtliches Engagement.
            <br />{" "}
            <Link>
              Lasst uns gemeinsam unsere schöne Stadt noch l(i)ebenswerter
              machen.
            </Link>
          </Text>
        </Container>
      </Box>
      <Box w="full" bg="white" py="4">
        <Container maxW="container.xl">
          <Flex align="center">
            <Wrap
              as={List}
              fontFamily="heading"
              fontWeight="bold"
              align="center"
              spacing="3"
            >
              <ListItem>
                <Text fontWeight="normal">Projekte filtern nach</Text>
              </ListItem>
              <ListItem>
                <Text>-</Text>
              </ListItem>
              <ListItem>
                <Link>Kultur</Link>
              </ListItem>
              <ListItem>
                <Text>/</Text>
              </ListItem>
              <ListItem>
                <Link>Soziales</Link>
              </ListItem>
              <ListItem>
                <Text>/</Text>
              </ListItem>
              <ListItem>
                <Link>Umweltschutz</Link>
              </ListItem>
            </Wrap>
          </Flex>
          <Box pt="8">
            <ProjectGrid projects={mappedProjects} />
          </Box>
        </Container>
      </Box>
      <Box w="full" bg="white" pb="24" pt="24">
        <Container maxW="container.xl">
          <Grid
            columns={2}
            spacing="10"
            templateColumns="repeat(5, 1fr)"
            gap={6}
          >
            <GridItem colSpan={2}>
              <Heading as="h2" size="lg" mb="4" variant="subtitle">
                Lebe deine Stadt
              </Heading>
              <Heading as="h2" size="xl" mb="4" maxW="md">
                Ehrenamtlich, engagiert, miteinander
              </Heading>
            </GridItem>
            <GridItem colSpan={3}>
              <Text>
                Alle sind eingeladen, sich mit Ideen, Zeit und Geld für eine{" "}
                <b>positive Entwicklung Potsdams einzubringen</b>. Wir vernetzen
                Gleichgesinnte, versammeln engagierte Menschen, bieten
                Unterstützung als Plattform für Ehrenamt und möchten es den
                Menschen in Potsdam leichter machen, das{" "}
                <b>Gemeinwohl zu stärken</b>, Gemeinschaftsgefühl zu erleben,
                ein <b>herzliches Miteinander</b> und eine starke Zukunft für Potsdam
                zu stiften.
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

Home.Layout = Default;
