import { Directus } from "@directus/sdk";

async function getProjects() {
  const directus = new Directus("https://portal.potsdamer-buergerstiftung.org");
  const res = await directus.items<any, any>("projects").readByQuery();
  return res.data;
}

export default async function HomePage() {
  const projects = await getProjects();
  return (
    <>
      <div className="container mx-auto px-4 pt-32 md:pt-44">
        <h1 className="font-header text-5xl font-bold text-slate-800 md:text-6xl lg:text-7xl">
          Brücken bauen,s
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
      <div>
      {projects?.map((project) => (
        <div key={project.title}>{project.title}</div>
      ),)}
      </div>
    </>
  );
}
