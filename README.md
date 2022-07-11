# Potsdamer Bürgerstiftung

### All of Potsdam community foundation's open source code in a single repo.

All our code lives in a single repository, an architecture generally called a monorepo. It holds many porojects that had previously lived in their own separate Github repos.

Deploying directly from our monorepo has some nice advantages, for consumers of our open source projects as
well as Potsdam community foundation itself. The entire repo is built by our CIs and internal contributions are open sourced automatically without the overhead of publishing. This repo will always contain the latest code that we use
internally, all of the tools can be built just as we use them, directly from HEAD.

## Projects include:

- [inselbuehne](https://github.com/potsdamer-buergerstiftung/projects/tree/main/apps/inselbuehne):
  A Nuxt 3 app used as website for our open stage project [inselbuehne-potsdam.de](https://inselbuehne-potsdam.de)
- [pbswebsite](https://github.com/potsdamer-buergerstiftung/projects/tree/main/apps/pbswebsite): A Nuxt 3 app used as our main public website [potsdamer-buergerstiftung.org](https://potsdamer-buergerstiftung.org)
- [portal](https://github.com/potsdamer-buergerstiftung/projects/tree/main/apps/portal): A custom directus instance used internally for content management [portal.potsdamer-buergerstiftung.org](https://portal.potsdamer-buergerstiftung.org)
- [links](https://github.com/potsdamer-buergerstiftung/projects/tree/main/apps/links): A node link shortener that works well with our CMS to generate QR-Codes as well as shortened links
- [nuxt-ui](https://github.com/potsdamer-buergerstiftung/projects/tree/main/packages/nuxt-ui):
  A Nuxt 3 module with shared Tailwind configuration and components
- [nuxt-directus](https://github.com/potsdamer-buergerstiftung/projects/tree/main/packages/nuxt-directus): A modified Nuxt 3 module to access our CMS-Api - Lots of ♥ to [Luka Bachmann](https://github.com/Intevel) who made up this module
- and others.

## Requirements

- Node.js 14
- Yarn 1.22
- postgresql (Optional for CMS)

## License

MIT License (MIT)
