import { FC } from "react";
import { Wrap, List, ListItem, Text, Link } from "@chakra-ui/react";

const SocialLinks: FC = () => {
  return (
    <Wrap
      as={List}
      fontFamily="heading"
      fontWeight="bold"
      align="center"
      spacing="3"
    >
      <ListItem>
        <Text>Folge uns</Text>
      </ListItem>
      <ListItem>
        <Text>-</Text>
      </ListItem>
      <ListItem>
        <Link isExternal>Fb.</Link>
      </ListItem>
      <ListItem>
        <Text>/</Text>
      </ListItem>
      <ListItem>
        <Link isExternal>Inst.</Link>
      </ListItem>
      <ListItem>
        <Text>/</Text>
      </ListItem>
      <ListItem>
        <Link isExternal>Yt.</Link>
      </ListItem>
    </Wrap>
  );
};

export default SocialLinks;
