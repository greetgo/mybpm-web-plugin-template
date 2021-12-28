#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 113

HERE=$PWD
PROJECT_NAME=mybpm-web-plugin-template
IMAGE_NAME="$(bash ./meta/name.bash)"
VERSION="$(bash ./meta/version.bash)"

rm -rf ./dist

cd ../
ng build $PROJECT_NAME --prod

cp -rf "./dist" "./docker/dist"
cp -rf "./docker/lib/plugins-config.json" "./docker/dist"

cd "${HERE}" || exit 113

docker build --tag "${IMAGE_NAME}" --build-arg projectName=${PROJECT_NAME} .
docker tag "${IMAGE_NAME}" "${IMAGE_NAME}:${VERSION}"
