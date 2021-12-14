import { Box, Heading, Container } from "@chakra-ui/layout";

const PageTitle = () => {
  return (
    <Box pb="20" pt="40" bg="white">
      <Container maxW="container.xl">
        <Heading size="3xl">Page Title</Heading>
      </Container>
    </Box>
  );
};

export default PageTitle;
