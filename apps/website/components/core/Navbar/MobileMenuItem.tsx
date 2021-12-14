import { FC } from "react";
import { Link, Stack, Text } from "@chakra-ui/layout";
import RouterLink from "next/link";

interface MobileMenuItemProps {
  href: string;
  text: string;
}

const MobileMenuItem: FC<MobileMenuItemProps> = ({ href, text }) => {
  return (
    <RouterLink passHref href={href}>
      <Link
        py="2"
        px={{ base: 0, lg: 3, xl: 4 }}
        fontSize="md"
        position="relative"
        _hover={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
        fontWeight="normal"
        color="#031D44"
      >
        <span>{text}</span>
      </Link>
    </RouterLink>
  );
};

export default MobileMenuItem;
