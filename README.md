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
for development mode
```
npm run build
```

## exec
for development mode
```
npm run start
```

## build docker image
```
docker build -t netoviz/app-server .
```

## run docker image
```
docker run -p3000:3000 -p9090:9090 netoviz/app-server
```
