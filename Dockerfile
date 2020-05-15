FROM node:12.16.3-alpine3.11

# WORKDIR /home
# RUN apk update && apk add git \
#     && git clone https://github.com/corestate55/netoviz-app-server.git \
#     && cd netoviz-app-server \
#     && pwd \
#     && cp dot.env .env \
#     && npm install \
#     && ./bin/dbmigrate.sh \
#     && npm run build

WORKDIR /home/netoviz-app-server
COPY . /home/netoviz-app-server/
RUN cp docker-entrypoint.sh /usr/local/bin \
    && cp dot.env .env \
    && npm rebuild

EXPOSE 3001
EXPOSE 9090

CMD npm run start
