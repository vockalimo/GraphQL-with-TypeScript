FROM node:16.13.2-alpine

ENV HOME=/home/app
COPY package.json package-lock.json $HOME/node_docker/
WORKDIR $HOME/node_docker
RUN npm install
ADD . /app
COPY . $HOME/node_docker
EXPOSE 4000

ENTRYPOINT ["npm", "run", "build:dev"]



