#!/bin/sh
set -e

# update environment when runtime.
cd /home/netoviz-app-server
env | grep NETOVIZ > .env
cat .env
# build (for development mode)
./bin/dbmigrate.sh
npm run build

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"
