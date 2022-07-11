FROM node:lts-alpine

WORKDIR /home/node/app/
COPY package.json .
COPY yarn.lock .
COPY turbo.json .
COPY apps/portal/ ./apps/portal
COPY packages/directus-extensions/ ./packages/directus-extensions
RUN yarn install
RUN yarn build --filter=portal

FROM directus/directus
COPY --from=0 /home/node/app/packages/directus-extensions/.output/extensions /directus/
