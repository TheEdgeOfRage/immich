FROM node:16-bullseye-slim

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /usr/src/app
ENTRYPOINT ["node", "dist/main"]

RUN apt-get update \
	&& apt-get install gcc g++ make cmake python3 python3-pip ffmpeg -y \
	&& rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
