FROM node:12.16.3-alpine3.11

WORKDIR /home
RUN apk update && apk add git \
    && git clone https://github.com/corestate55/netoviz-app-server.git \
    && cd netoviz-app-server \
    && pwd \
    && cp dot.env .env \
    && npm install \
    && ./bin/dbmigrate.sh \
    && npm run build

EXPOSE 3000
EXPOSE 9090

WORKDIR /home/netoviz-app-server
CMD npm run start
