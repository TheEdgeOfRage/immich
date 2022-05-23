FROM node:16-alpine3.14 as prod

WORKDIR /usr/src/app
ENTRYPOINT ["/bin/sh", "./entrypoint.sh"]
EXPOSE 3000

RUN chown node:node /usr/src/app \
	&& apk add --update-cache build-base python3

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

# Issue build command in entrypoint.sh to capture user .env file instead of the builder .env file.
