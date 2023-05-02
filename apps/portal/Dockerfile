FROM node:16-alpine as build

WORKDIR /fe
COPY package.json .
COPY yarn.lock .
COPY turbo.json .
COPY apps/portal/ ./apps/portal
COPY packages/directus-extensions/ ./packages/directus-extensions
RUN yarn install
RUN yarn build --filter=portal

FROM directus/directus:10.0.0
COPY --from=build /fe/packages/directus-extensions/.output/extensions /directus/extensions
