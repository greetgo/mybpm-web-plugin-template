#!/usr/bin/env bash

#set -e

cd "$(dirname "$0")" || exit 113

BRANCH="$(bash branch.bash)"
VERSION="$(bash ./version.bash)"

TAG_NAME="snapshot-$BRANCH-$VERSION"

echo -n "$TAG_NAME"
