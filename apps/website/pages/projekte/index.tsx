import { Box, Button, Container } from "@chakra-ui/react";
import { Breadcrumb } from "@components/core";
import PageTitle from "@components/core/PageTitle";
import { Default } from "@components/layouts";
import { ProjectGrid } from "@components/project";

import projects from "@config/projects.json";

const mappedProjects = projects.map((project) => ({
  ...project,
  link: `/projekte/${project.slug}`,
}));

export default function Projects() {
  return (
    <>
      <PageTitle
        title="Projekte"
        contentBottom
        description="Hinterlasse uns ein paar Infos und wir melden uns bei dir. "
      />
      <Box as="section" pt="20" bg="white">
        <Breadcrumb items={[{ label: "Projekte", link: "/projekte" }]} />
      </Box>
      <Box w="full" bg="white" py="4">
        <Container maxW="container.xl">
          <ProjectGrid projects={mappedProjects} />
        </Container>
      </Box>
    </>
  );
}

Projects.Layout = Default;
