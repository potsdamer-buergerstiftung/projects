import { Box, Heading, Container, Text } from "@chakra-ui/layout";
import { FC } from "react";

interface PageTitleArgs {
  title: string;
  description?: string;
  contentBottom?: boolean;
}

const PageTitle: FC<PageTitleArgs> = ({
  title,
  description,
  children,
  contentBottom = false,
}) => {
  return (
    <Box pb="20" pt="40" bg="white">
      <Container maxW="container.xl">
        {!contentBottom && children}
        <Heading size="4xl">{title}</Heading>
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
