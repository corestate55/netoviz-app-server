# netoviz-app-server
Backend of netoviz (AP/DB)

## install
install packages.
```
npm install
```

create db file
```
./bin/dbmigrate.sh
```

## build
for development mode (with REST and gRPC API)
```
npm run build
```

for production mode (with REST API)
```
npm run release-build
```


## run
for development mode (It watches changing of sources and rebuild using nodemon.)
```
npm run dev
```

run builded source
```
npm run start
```

## build docker image
```
docker build -t netoviz/app-server .
```

## run docker image
```
docker run -p3001:3001 -p9090:9090 --env-file=.env --name nv-app netoviz/app-server
```
NOTICE: it overwrite `.env` file in image using `--env-file`.
See: [docker-entrypoint.sh](./docker-entrypoint.sh).
