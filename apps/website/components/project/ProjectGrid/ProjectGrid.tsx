import { Grid, GridItem } from "@chakra-ui/layout";
import { FC } from "react";
import ProjectCard, { ProjectCardProps } from "../ProjectCard";

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

function indexToColSpanSize(index: number): number {
  if ((index + 9) % 10 == 0) {
    return 2;
  }

  if ((index + 5) % 10 == 0) {
    return 2;
  }

  return 1;
}

const ProjectGrid: FC<ProjectGridProps> = ({ projects }) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={10}>
      {projects.map((project, i) => (
        <GridItem
          colSpan={{ base: 6, md: 3, lg: indexToColSpanSize(i) * 2 }}
          key={i}
        >
          <ProjectCard {...project} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
