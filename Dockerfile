FROM --platform=$TARGETPLATFORM node:23.7-alpine AS apline_container

ARG APP_PORT=4000
# Build server
FROM apline_container AS build_server

WORKDIR /usr/src/app

#RUN apk --no-cache add git
COPY ./src ./src
COPY ./package*.json ./
COPY ./server.ts ./
COPY ./tsconfig*.json ./
COPY ./angular.json ./
RUN npm ci --verbose
RUN npm run build

# Build Final Image
FROM apline_container

LABEL org.opencontainers.image.title="Herpes_Home"
LABEL org.opencontainers.image.description="Herpes_Home Docker Image"

ENV PORT=$APP_PORT

WORKDIR /usr/src/app
COPY --from=build_server --chown=node:node /usr/src/app/package*.json ./
#COPY --chown=node:node ./src ./src
COPY --from=build_server --chown=node:node /usr/src/app/dist ./dist

ENV NODE_ENV="production"
#RUN npm ci --production && \
#    npm cache clean --force

EXPOSE $APP_PORT

USER node
ENTRYPOINT ["npm","run","serve:ssr:herpes_home"]
#CMD [ "api" ]