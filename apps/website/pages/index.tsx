import { Box, Image } from "@chakra-ui/react";
import ComingSoon from "@components/layouts/ComingSoon";

export default function ComingSoonPage() {
  return (
    <>
      <Box bg="white">
        <Image
          src="/undraw_city_life_gnpr.svg"
          alt="Illustration"
          height="100vh"
          objectFit="cover"
        />
      </Box>
    </>
  );
}

ComingSoonPage.Layout = ComingSoon;
