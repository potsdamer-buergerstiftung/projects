import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const ProjectView: FC = () => {
  return (
    <Container maxWidth="container.xl">
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem rowSpan={1}>
          <Box width="100%" position="relative">
            <Image src="/buer_projekte_potspresso_1260x500.jpg" />
          </Box>
        </GridItem>
        <GridItem rowSpan={1}>
          <Text p="10">
            We’ve created a unique visual system and strategy across the wide
            existing spectrum of visible mobile applications and found yourself
            in a wide, straggling with wainscots.
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ProjectView;
