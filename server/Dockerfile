FROM node:16-alpine3.14

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /usr/src/app
ENTRYPOINT ["node", "dist/main"]

RUN apk add --update-cache build-base python3 libheif vips-dev vips

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build
