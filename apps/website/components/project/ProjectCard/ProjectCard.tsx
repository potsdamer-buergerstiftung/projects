import { FC, useState, useEffect } from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  VStack,
  LinkBox,
  LinkOverlay,
  Flex,
} from "@chakra-ui/layout";
import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionStack = motion(Stack);

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <LinkBox
      rounded="lg"
      w="full"
      h="20rem"
      bg="background"
      position="relative"
      overflow="hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MotionBox
        animate={{ scale: isHovered ? 1.1 : 1 }}
        position="relative"
        height="full"
        width="full"
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <Image
          src={imageUrl}
          alt="sad"
          layout="fill"
          sizes="1000px"
          objectFit="cover"
          quality="50"
        />
      </MotionBox>
      <Box
        position="absolute"
        top="0"
        right="0"
        left="0"
        bottom="0"
        bgGradient="linear(to-b, transparent, blackAlpha.600 100%)"
        pointerEvents="none"
      />
      <Flex
        position="absolute"
        direction="column"
        justify="flex-end"
        top="0"
        bottom="0"
        right="0"
        left="0"
        padding="8"
      >
        <VStack align="left" spacing="1">
          <Heading size="md" color="white">
            <NextLink href={link} passHref>
              <LinkOverlay>{title}</LinkOverlay>
            </NextLink>
          </Heading>
          <Box position="relative" pointerEvents="none">
            <MotionText
              color="gray.200"
              animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -20 : 0 }}
              transition={{ ease: "easeOut", duration: 0.35 }}
            >
              {description}
            </MotionText>
            <MotionStack
              position="absolute"
              direction="row"
              align="center"
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ ease: "easeOut", duration: 0.35 }}
              top="0"
            >
              <Text as="span" fontWeight="bold" color="white">
                Projekt anzeigen{" "}
              </Text>
              <Box height="2px" width="50px" bg="white" />
            </MotionStack>
          </Box>
        </VStack>
      </Flex>
    </LinkBox>
  );
};

export default ProjectCard;
