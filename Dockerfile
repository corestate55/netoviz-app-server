FROM node:12.16.3-alpine3.11

WORKDIR /home/netoviz-app-server
COPY . /home/netoviz-app-server/
# build development mode
RUN cp dot.env .env && npm rebuild && npm run build

EXPOSE 3001
EXPOSE 9090

# run development mode
CMD ./bin/dbmigrate.sh && npm run start
