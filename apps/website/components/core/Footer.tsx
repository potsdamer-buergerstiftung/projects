import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
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
      <Box as="footer">
        <Container maxW="container.xl">
          <Box fontSize="md" py="20">
            <Grid templateColumns="repeat(4, 1fr)" gap="5">
              <GridItem colSpan={1}>
                <VStack spacing="10" align="left">
                  <Logo width="full" maxW="48" />
                  <SocialLinks />
                </VStack>
              </GridItem>
              <GridItem colSpan={1}>
                <Heading size="md" mb="8">
                  Adresse
                </Heading>
                <Text>Friedrich-Ebert-Straße 94</Text>
                <Text>14467 Potsdam</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Box>
                  <Heading size="md" mb="8">
                    Ehrenamt
                  </Heading>
                  <Text>
                    Du möchtest helfen, die Stadt l(i)ebenswerter zu machen?
                  </Text>
                  <Text>info@potsdamer-buergerstiftung.org</Text>
                </Box>
                <Box mt="10">
                  <Heading size="md" mb="8">
                    Ehrenamt
                  </Heading>
                  <Text>Friedrich-Ebert-Straße 94</Text>
                  <Text>14467 Potsdam</Text>
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
