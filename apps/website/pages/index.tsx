import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  Center,
  Flex,
  Wrap,
  List,
  ListItem,
  Grid,
  GridItem,
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
      <Box w="full" bg="white" py="4">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Grid>
        </Container>
      </Box>
    </>
  );
}

Home.Layout = Default;
