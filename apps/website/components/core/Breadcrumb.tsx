import { Box, Heading, Container, Text, Wrap, Link } from "@chakra-ui/layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { ChevronRightIcon } from "@chakra-ui/icons";
import RouterLink from "next/link";
import { FC } from "react";

interface BreadcrumbArgs {
  items: BreadcrumbItem[];
}

interface BreadcrumbItem {
  label: string;
  link: string;
}

const BC: FC<BreadcrumbArgs> = ({ items }) => {
  return (
    <Box py="2" bg="white">
      <Container maxW="container.xl">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <RouterLink href="/" passHref>
              <BreadcrumbLink color="black" fontWeight="bold">
                Startseite
              </BreadcrumbLink>
            </RouterLink>
          </BreadcrumbItem>
          {items.map((item, i) => (
            <BreadcrumbItem isCurrentPage={items.length === i + 1} key={i}>
              <RouterLink href={item.link} passHref key={i}>
                <BreadcrumbLink
                  color="black"
                  fontWeight={items.length === i + 1 ? "normal" : "bold"}
                >
                  {item.label}
                </BreadcrumbLink>
              </RouterLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Container>
    </Box>
  );
};

export default BC;
