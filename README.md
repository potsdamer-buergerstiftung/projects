# Potsdamer Bürgerstiftung

### All of Potsdam community foundation's open source code in a single repo.

All our code lives in a single repository, an architecture generally called a monorepo. It holds many porojects that had previously lived in their own separate Github repos.

Deploying directly from our monorepo has some nice advantages, for consumers of our open source projects as
well as Potsdam community foundation itself. The entire repo is built daily by our CIs and internal contributions are open sourced automatically without the overhead of publishing. This repo will always contain the latest code that we use
internally, all of the tools can be built just as we use them, directly from HEAD.

## Projects include:

- [inselbuehne](https://github.com/potsdamer-buergerstiftung/projects/tree/main/apps/inselbuehne):
  A Nuxt 3 app used as a website for our open stage project
- [pbswebsite](https://github.com/potsdamer-buergerstiftung/projects/tree/main/apps/pbswebsite): A Nuxt 3 app used as our main public website
- [cms](https://github.com/potsdamer-buergerstiftung/projects/tree/main/apps/cms): A custom directus instance used internally for content management
- [nuxtui](https://github.com/potsdamer-buergerstiftung/projects/tree/main/packages/nuxtui):
  A Nuxt 3 and Vue UI-Library with Tailwind used in our Nuxt projects
- and others.

## Requirements

- Node.js 14
- Yarn 1.22
- postgresql

## License

MIT License (MIT)
