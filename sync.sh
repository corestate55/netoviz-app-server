#!/usr/bin/env bash

ORIG=../netoviz/

cp ${ORIG}/bin/dbmigrate.sh ./bin/
cp ${ORIG}/bin/grpc*.js ./bin/
cp ${ORIG}/bin/push_alert.rb ./bin/

cp -r ${ORIG}/db .
mv ./server/index.js ./server/index.js.bak
cp -r ${ORIG}/server .
mv ./server/index.js.bak ./server/index.js
cp -r ${ORIG}/static .

cp ${ORIG}/.editorconfig .
# cp ${ORIG}/dot.env .
