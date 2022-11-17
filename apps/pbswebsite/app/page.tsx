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
            <div className="col-span-6 lg:col-span-3" key={project.id}>
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
      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-600">
              Lebe deine Stadt
            </h4>
            <h1 className="font-header mt-2 text-4xl font-bold">
              Ehrenamtlich, engagiert, miteinander
            </h1>
          </div>
          <div>
            <p>
              Alle sind eingeladen, sich mit Ideen, Zeit und Geld für eine
              <b>positive Entwicklung Potsdams einzubringen</b>. Wir vernetzen
              Gleichgesinnte, versammeln engagierte Menschen, bieten
              Unterstützung als Plattform für Ehrenamt und möchten es den
              Menschen in Potsdam leichter machen, das{" "}
              <b>Gemeinwohl zu stärken</b>, Gemeinschaftsgefühl zu erleben, ein
              <b>herzliches Miteinander</b> und eine starke Zukunft für Potsdam
              zu stiften. Mit unserer Arbeit konnten wir seit unserer Gründung{" "}
              <b>erste Schwerpunkte setzen</b>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
