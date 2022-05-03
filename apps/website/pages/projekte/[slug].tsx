import { Box, HStack, Text } from "@chakra-ui/react";
import { Breadcrumb } from "@components/core";
import PageTitle from "@components/core/PageTitle";
import { Default, useShowBackButton } from "@components/layouts";
import { ProjectView } from "@components/project";
import projects from "@config/projects.json";
import { GetStaticPaths, GetStaticProps } from "next";

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
  useShowBackButton();
  return (
    <>
      <PageTitle title={project.title} description={project.description}>
        <HStack>
          <Text fontWeight="semibold">{project.categories.join(", ")}</Text>
          <Text>•</Text>
          <Text>Seit Februar 2019</Text>
        </HStack>
      </PageTitle>
      <Box as="section" pt="20" bg="white">
        <Breadcrumb
          items={[
            { label: "Projekte", link: "/projekte" },
            { label: project.title, link: `/projekte/${project.slug}` },
          ]}
        />
      </Box>
      <Box as="section" bg="white" pt="5">
        <ProjectView />
      </Box>
    </>
  );
}

Project.Layout = Default;
