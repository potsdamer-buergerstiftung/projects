import { FC } from "react";
import { Wrap, List, ListItem, Text, Link } from "@chakra-ui/react";

interface SocialLinksProps {
  showFollowUsLabel?: boolean;
}

const SocialLinks: FC<SocialLinksProps> = ({ showFollowUsLabel = true }) => {
  return (
    <Wrap
      as={List}
      fontFamily="heading"
      fontWeight="bold"
      align="center"
      spacing="3"
    >
      {showFollowUsLabel && (
        <>
          <ListItem>
            <Text>Folg&apos; uns</Text>
          </ListItem>
          <ListItem>
            <Text>-</Text>
          </ListItem>
        </>
      )}
      <ListItem>
        <Link isExternal>Facebook</Link>
      </ListItem>
      <ListItem>
        <Text>/</Text>
      </ListItem>
      <ListItem>
        <Link isExternal>Instagram</Link>
      </ListItem>
      <ListItem>
        <Text>/</Text>
      </ListItem>
      <ListItem>
        <Link isExternal>YouTube</Link>
      </ListItem>
    </Wrap>
  );
};

export default SocialLinks;
