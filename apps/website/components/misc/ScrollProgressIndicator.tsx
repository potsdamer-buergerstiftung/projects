import { useState, useEffect } from "react";
import { Box, HStack, Text } from "@chakra-ui/layout";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const MotionBox = motion(Box);
const MotionHStack = motion(HStack);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollProgressIndicator = () => {
  const [currentPrecent, setCurrentPercent] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const show = currentPrecent > 20;

  useEffect(
    () =>
      yRange.onChange(() => {
        setCurrentPercent(Math.trunc(yRange.get()));
      }),
    [yRange]
  );

  return (
    <>
      <AnimatePresence>
        {show && (
          <MotionHStack
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            as="button"
            spacing="4"
            align="center"
            onClick={scrollToTop}
          >
            <Box
              width="14"
              height="2px"
              bg="gray.200"
              position="relative"
              transform="rotate(180deg)"
            >
              <MotionBox
                bg="black"
                style={{ width: currentPrecent + "%" }}
                position="absolute"
                height="full"
              />
            </Box>
            <Text fontWeight="bold" fontSize="md">
              Nach oben scrollen
            </Text>
          </MotionHStack>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgressIndicator;
