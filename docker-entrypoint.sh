#!/bin/sh
set -e

cd /home/netoviz-app-server
./bin/dbmigrate.sh

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"
