FROM --platform=$BUILDPLATFORM node:21.5-alpine AS apline_container

# Build server
FROM apline_container AS build_server

ARG MW_DEFAULT_ENDPOINT="undefined"
ENV MW_ENDPOINT $MW_DEFAULT_ENDPOINT
ENV MW_PORT=3000

WORKDIR /usr/src/app

RUN apk --no-cache add git
RUN git clone https://github.com/donmahallem/herpes_home.git .
RUN echo "Building with Endpoint ${MW_ENDPOINT} and Port ${MW_PORT}"
RUN npm ci
RUN npm run build

# Build Final Image
FROM apline_container

LABEL org.opencontainers.image.title="Herpes_Home"
LABEL org.opencontainers.image.description="Herpes_Home Docker Image"

ARG MW_DEFAULT_ENDPOINT="undefined"
ENV MW_ENDPOINT $MW_DEFAULT_ENDPOINT
ENV MW_PORT=3000

WORKDIR /usr/src/app
COPY --from=build_server --chown=node:node /usr/src/app/package*.json ./
#COPY --chown=node:node ./src ./src
COPY --from=build_server --chown=node:node /usr/src/app/dist ./dist

ENV NODE_ENV="production"
RUN npm ci --production && \
    npm cache clean --force

EXPOSE 4000

USER node
ENTRYPOINT ["npm","run","serve:ssr:herpes_home"]
#CMD [ "api" ]