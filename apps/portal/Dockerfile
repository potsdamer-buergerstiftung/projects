FROM node:lts as build

WORKDIR /fe
COPY package.json .
COPY yarn.lock .
COPY turbo.json .
COPY apps/portal/ ./apps/portal
COPY packages/ ./packages
RUN yarn install
RUN yarn build --filter=portal

FROM directus/directus
COPY --from=build /fe/packages/.output/extensions /directus/
