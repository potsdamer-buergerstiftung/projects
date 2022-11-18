import { Directus } from "@directus/sdk";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import ArticleCard from "../components/ArticleCard";
import classNames from "classnames";

async function getProjects() {
  const directus = new Directus("https://portal.potsdamer-buergerstiftung.org");
  const res = await directus.items<any, any>("projects").readByQuery();
  return res.data;
}

async function getPosts() {
  const directus = new Directus("https://portal.potsdamer-buergerstiftung.org");
  const res = await directus.items<any, any>("posts").readByQuery({
    fields: ["title", "date", "id", "image", "tags", "project.title", "slug"],
    limit: 4,
    sort: ["-date"],
  });
  return res.data;
}

export default async function HomePage() {
  const projects = await getProjects();
  const posts = await getPosts();

  function indexToSpan(index: number) {
    if ((index + 9) % 10 == 0) {
      return 2;
    }

    if ((index + 5) % 10 == 0) {
      return 2;
    }

    return 1;
  }

  const priorities = [
    {
      subTitle: "Nachhaltigkeit",
      title: "Nachhaltig engagieren und handeln",
      assetId: "0e823ed4-1409-4827-b9c3-14a442a1db52",
      description: `Wir verschaffen Nachhaltigkeit und Müllvermeidung in Potsdam mehr Aufmerksamkeit und leisten unseren Beitrag zu Umweltschutz, Stadtgrün und Klima.`,
      color: "text-emerald-200",
    },
    {
      subTitle: "Kultur",
      title: "Kultur und Teilhabe fördern",
      assetId: "72baf604-4397-4f22-9ac7-195df8b1a591",
      description: `Freier Zugang zu Kultur und Unterhaltung ist wichtiger denn je. Wir ermöglichen Kunstschaffenen sich in Potsdam zu präsentieren und allen Menschen, Teil des Publikums zu sein.`,
      color: "text-red-200",
    },
    {
      subTitle: "Begegnung & Toleranz",
      title: "Menschen zusammenbringen",
      assetId: "db74ab6f-0e47-415d-8686-a3a6afa2b6a1",
      description: `Zusammenhalt, Solidarität und Toleranz entsteht durch Begegnung. Wir organisieren Zusammentreffen aller Art und vereinfachen Begegnung durch gemeinsame Interessen. Wir alle sind Potsdam.`,
      color: "text-blue-200",
    },
  ];

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
          {projects?.map((project, i) => (
            <div
              className={classNames("col-span-6 lg:col-span-3", {
                "xl:col-span-2": indexToSpan(i) * 2 == 2,
                "xl:col-span-4": indexToSpan(i) * 2 == 4,
              })}
              key={project.id}
            >
              <ProjectCard
                title={project.title}
                subTitle={project.sub_title}
                projectId={project.id}
                imageId={project.image}
                imageSize={indexToSpan(i) * 2 == 2 ? 'small' : 'large'}
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
              <b>Gemeinwohl zu stärken</b>, Gemeinschaftsgefühl zu erleben, ein{" "}
              <b>herzliches Miteinander</b> und eine starke Zukunft für Potsdam
              zu stiften. Mit unserer Arbeit konnten wir seit unserer Gründung{" "}
              <b>erste Schwerpunkte setzen</b>.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-6 overflow-hidden">
          {priorities.map((priority, index) => (
            <div
              className="relative col-span-6 md:col-span-3 lg:col-span-2"
              key={index}
            >
              <div className="absolute z-[-1] h-full w-full">
                <div className="absolute bottom-0 top-0 left-0 right-0 bg-slate-900 opacity-60" />
                <Image
                  src={priority.assetId}
                  className="h-full w-full object-cover"
                  quality={32}
                  width={300}
                  height={200}
                  alt="Bild"
                />
              </div>
              <div className="container mx-auto flex h-full flex-col justify-between px-4 py-16 md:p-8 lg:max-w-none xl:p-10">
                <div className="mb-20 md:mb-36">
                  <h1
                    className={`mb-1 text-sm font-semibold uppercase ${priority.color}`}
                  >
                    {priority.subTitle}
                  </h1>
                  <h2 className="font-header text-3xl font-bold text-white">
                    {priority.title}
                  </h2>
                </div>
                <div>
                  <p className="text-white">{priority.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-6 gap-8 px-4">
          <div className="col-span-6 lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase text-gray-600">
              Von unserem Blog
            </h4>
            <h1 className="font-header mt-2 text-4xl font-bold">
              Aktuelles & Neues von uns
            </h1>
            <p className="mt-4 max-w-2xl">
              Verfolge die Entwicklung unserer Projekte, die dank Deiner
              großzügigen Beiträge und Deiner Unterstützung möglich wurden.
            </p>
            <Link
              href="/stiftung/aktuelles"
              className="text-md font-header mt-12 mb-4 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
              Alle Beiträge
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          {posts?.map((post) => (
            <div
              className="col-span-6 min-h-max lg:col-span-3 xl:col-span-2"
              key={post.id}
            >
              <ArticleCard
                title={post.title}
                date={new Date(post.date)}
                imageId={post.image}
                projectTitle={post.project?.title}
                compact
                link="`/stiftung/aktuelles/${post.slug}`"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}