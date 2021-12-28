#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 113

IMAGE_NAME="$(bash ./meta/name.bash)"
VERSION="$(bash ./meta/version.bash)"

bash ./image.sh

docker push "${IMAGE_NAME}:${VERSION}"
echo PUSHED IMAGE "${IMAGE_NAME}:${VERSION}"
