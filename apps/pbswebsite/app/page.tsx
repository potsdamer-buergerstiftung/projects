import { Directus } from "@directus/sdk";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

async function getProjects() {
  const directus = new Directus("https://portal.potsdamer-buergerstiftung.org");
  const res = await directus.items<any, any>("projects").readByQuery();
  return res.data;
}

export default async function HomePage() {
  const projects = await getProjects();

  function indexToSpan(index: number) {
    if ((index + 9) % 10 == 0) {
      return 2;
    }

    if ((index + 5) % 10 == 0) {
      return 2;
    }

    return 1;
  }

  return (
    <>
      <div className="container mx-auto px-4 pt-32 md:pt-44">
        <h1 className="font-header text-5xl font-bold text-slate-800 md:text-6xl lg:text-7xl">
          Brücken bauen,
          <br />
          Menschen verbinden
        </h1>
        <p className="mt-8 text-slate-800 md:text-lg">
          Wir sind die Potsdamer Bürgerstiftung und fördern als Mitmach-Stiftung
          ehrenamtliches Engagement.
        </p>
        <p className="pt-1 font-bold text-emerald-500 md:text-lg">
          Lass uns gemeinsam unsere schöne Stadt noch l(i)ebenswerter machen.
        </p>
      </div>
      <div className="container mx-auto px-4 pt-10 pb-16 md:pt-20">
        <div className="grid grid-cols-6 gap-8">
          {projects?.map((project, index) => (
            <div className="col-span-6 lg:col-span-3">
              <ProjectCard
                title={project.title}
                subTitle={project.sub_title}
                projectId={project.id}
                imageId={project.image}
              />
            </div>
          ))}
        </div>
        <Link
          href="/projekte"
          className="text-md font-header mt-12 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Alle Projekte
        </Link>
      </div>
    </>
  );
}
