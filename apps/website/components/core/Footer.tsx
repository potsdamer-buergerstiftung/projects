import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/layout";
import { Input, InputRightElement, InputGroup, Button } from "@chakra-ui/react";
import { SocialLinks } from "@components/misc";
import { FC } from "react";
import { Logo } from ".";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Box as="footer" bg="gray.50">
        <Container maxW="container.xl">
          <Box fontSize="md" py="20">
            <Grid templateColumns="repeat(4, 1fr)" gap="8">
              <GridItem colSpan={1}>
                <VStack>
                  <VStack spacing="10" align="left">
                    <Logo width="full" maxW="48" />
                    <SocialLinks showFollowUsLabel={false} />
                  </VStack>
                </VStack>
              </GridItem>
              <GridItem colSpan={1}>
                <Heading size="md" mb="8">
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
                <Box>
                  <Heading size="md" mb="8">
                    Ehrenamt
                  </Heading>
                  <Text>
                    Du möchtest mitmachen?
                  </Text>
                  <Text>
                    <Link href="mailto:ehrenamt@potsdamer-buergerstiftung.org">
                      ehrenamt@potsdamer-buergerstiftung.org
                    </Link>
                  </Text>
                </Box>
                <Box mt="10">
                  <Heading size="md" mb="8">
                    Pressekit
                  </Heading>
                  <Text>
                    Du möchtest über uns berichten? Wir haben dir ein Paket für
                    die freie Verwendung geschnürt.
                  </Text>
                  <Button size="sm" mt="4" rightIcon={<DownloadIcon />}>
                    Download
                  </Button>
                </Box>
              </GridItem>
              <GridItem colSpan={1}>
                <Heading size="md" mb="8">
                  Für Newsletter anmelden
                </Heading>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    placeholder="E-Mail-Adresse"
                    variant="filled"
                  />
                  <InputRightElement width="6.5rem">
                    <Button h="1.75rem" size="sm">
                      Anmelden
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </GridItem>
            </Grid>
          </Box>
          <Box borderTopWidth="1px" borderTopColor="gray.200" py="5">
            <Stack direction="row" justify="space-between">
              <Box>
                <Text color="gray.600">
                  &copy; {year} Potsdamer Bürgerstiftung & Mitwirkende
                </Text>
              </Box>
              <Box>
                <Wrap direction="row" spacing="4">
                  <Text color="gray.600">GitHub</Text>
                  <Text color="gray.600">Datenschutzerklärung</Text>
                  <Text color="gray.600">Impressum</Text>
                </Wrap>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
