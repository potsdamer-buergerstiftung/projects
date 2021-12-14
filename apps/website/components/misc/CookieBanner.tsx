import { CloseIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text, Wrap } from "@chakra-ui/react";
import { FC } from "react";

interface CookieBannerProps {
  onAcceptCookies: () => void;
}

const CookieBanner: FC<CookieBannerProps> = ({ onAcceptCookies }) => {
  return (
    <>
      <Box
        position="fixed"
        bottom="2"
        transform="translateX(-50%)"
        left="50%"
        shadow="base"
        bg="white"
        px="3"
        py="2"
        rounded="md"
      >
        <Wrap direction="row">
          <Text display="inline-block">
            Wir nutzen keine Cookies für die Erfassung personenbezogener Daten.{" "}
          </Text>
          <IconButton
            aria-label="Accept Cookies"
            icon={<CloseIcon />}
            onClick={onAcceptCookies}
          />
        </Wrap>
      </Box>
    </>
  );
};

export default CookieBanner;
