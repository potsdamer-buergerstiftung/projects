import { FC } from "react";
import { Link, Stack, Text } from "@chakra-ui/layout";
import RouterLink from "next/link";

interface NavbarItemProps {
  href: string;
  text: string;
  index: number;
}

function addZero(index: number): string {
  return index < 10 ? `0${index}` : index.toString();
}

const NavbarItem: FC<NavbarItemProps> = ({ href, text, index }) => {
  return (
    <RouterLink passHref href={href}>
      <Link
        py="5"
        px={{ base: 0, lg: 3, xl: 4 }}
        fontSize="md"
        position="relative"
        _hover={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
        fontWeight="medium"
        color="#031D44"
      >
        <Stack align="end" spacing="0" lineHeight="1.2em">
          <Text
            as="span"
            color="accent"
            fontWeight="bold"
            fontSize="0.8em"
            lineHeight="1.2em"
          >
            {addZero(index)}
          </Text>
          <span>{text}</span>
        </Stack>
      </Link>
    </RouterLink>
  );
};

export default NavbarItem;
