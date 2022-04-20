import { Box } from "@chakra-ui/react";
import { Breadcrumb } from "@components/core";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";

export default function Blog() {
  return (
    <>
      <PageTitle
        title="Aktuelles"
        contentBottom
        description="Hier berichten wir über Sachen, die wir mit vielen tollen Ehrenamtlichen und der Hilfe von unseren Mitgliedern erlebt haben."
      />
      <Box as="section" pt="20" bg="white">
        <Breadcrumb items={[{ label: "Aktuelles", link: "/blog" }]} />
      </Box>
    </>
  );
}

Blog.Layout = Default;
