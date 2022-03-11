import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";

const BackButton: FC = () => {
  const router = useRouter();

  return (
    <IconButton
      variant="solid"
      background="gray.100"
      aria-label="Call Sage"
      fontSize="20px"
      height="12"
      width="12"
      rounded="full"
      icon={<ArrowBackIcon />}
      onClick={() => router.back()}
    />
  );
};

export default BackButton;
