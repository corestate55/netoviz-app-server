#!/bin/sh
set -e

NV_DIR=/home/netoviz-app-server
ENV_FILE=${NV_DIR}/.env
env | grep NETOVIZ > ${ENV_FILE}
cat ${ENV_FILE}

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"
