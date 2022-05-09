import { Box, Heading, Container, Text } from "@chakra-ui/layout";

interface PageTitleArgs {
  title: string;
  description?: string;
  contentBottom?: boolean;
  children: React.ReactNode;
}

const PageTitle: React.FC<PageTitleArgs> = ({
  title,
  description,
  children,
  contentBottom = false,
}) => {
  return (
    <Box pt="40" bg="white">
      <Container maxW="container.xl">
        {!contentBottom && children}
        <Heading size="3xl">{title}</Heading>
        {description && (
          <Text mt="4" mb={contentBottom && children && 5}>
            {description}
          </Text>
        )}
        {contentBottom && children}
      </Container>
    </Box>
  );
};

export default PageTitle;
