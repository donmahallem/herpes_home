FROM --platform=$TARGETPLATFORM node:22.13-alpine AS apline_container

RUN npm install -g npm@11.1.0
# Build server
FROM apline_container AS build_server

WORKDIR /usr/src/app

RUN apk --no-cache add git
RUN git clone https://github.com/donmahallem/herpes_home.git .
RUN npm ci
RUN npm run build

# Build Final Image
FROM apline_container

LABEL org.opencontainers.image.title="Herpes_Home"
LABEL org.opencontainers.image.description="Herpes_Home Docker Image"

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