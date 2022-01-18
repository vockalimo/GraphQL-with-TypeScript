FROM node:16.13.2-alpine

WORKDIR /src

ADD . /src

RUN npm install

ENTRYPOINT ["npm", "run", "start:env"]
