import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Stack, VStack } from "@chakra-ui/layout";
import { useUI } from "@components/context";
import { SocialLinks } from "@components/misc";
import { motion } from "framer-motion";
import { FC } from "react";
import MobileMenuItem from "./MobileMenuItem";
import { CloseIcon } from "@chakra-ui/icons";

interface MobileMenuProps {
  items: any[];
}

const MotionBox = motion(Box);

const MobileMenu: FC<MobileMenuProps> = ({ items }) => {
  const { closeMobileMenu } = useUI();

  return (
    <>
      <MotionBox
        bg="white"
        position="absolute"
        height="100vh"
        width="100%"
        maxWidth="85%"
        zIndex="10000"
        p="6"
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100px" }}
        transition={{ times: [0.4, 0, 0.2, 1] }}
        overflowY="hidden"
      >
        <VStack align="start" spacing="8">
          <IconButton
            variant="unstyled"
            rounded="full"
            onClick={closeMobileMenu}
            aria-label="Close Menu"
            icon={<CloseIcon />}
            size="sm"
          />
          <VStack align="start">
            {items.map((item, i) => (
              <MobileMenuItem key={i} {...item} />
            ))}
          </VStack>
        </VStack>
      </MotionBox>
      <MotionBox
        bg="background"
        position="absolute"
        height="full"
        width="100%"
        maxWidth="15%"
        right="0"
        zIndex="100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ times: [0.4, 0, 0.2, 1] }}
      />
    </>
  );
};

export default MobileMenu;
