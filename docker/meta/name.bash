#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 113

IMAGE_NAME=$(bash ../lib/_name.bash);
BRANCH="$(bash branch.bash)"

echo "${IMAGE_NAME}-${BRANCH}" | awk '{print tolower($0)}'
