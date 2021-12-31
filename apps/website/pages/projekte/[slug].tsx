import PageTitle from "@components/core/PageTitle";
import { Default } from "@components/layouts";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Breadcrumb } from "@components/core";

import { GetStaticProps, GetStaticPaths } from "next";
import projects from "@config/projects.json";
import { ProjectView } from "@components/project";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug == params.slug);

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export default function Project({ project }) {
  return (
    <>
      <PageTitle title={project.title} description={project.description}>
        <HStack>
          <Text fontWeight="semibold">{project.categories.join(", ")}</Text>
          <Text>•</Text>
          <Text>Seit Februar 2019</Text>
        </HStack>
      </PageTitle>
      <Breadcrumb
        items={[
          { label: "Projekte", link: "/projekte" },
          { label: project.title, link: `/projekte/${project.slug}` },
        ]}
      />
      <Box as="section" bg="white" pt="5">
        <ProjectView />
      </Box>
    </>
  );
}

Project.Layout = Default;
