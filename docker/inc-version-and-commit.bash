#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 113

VERSION_FILE=$(bash meta/version-file.bash)

node lib/inc-version-in-file.js "$VERSION_FILE"

VERSION="$(bash ./meta/version.bash)"

git commit -m "SCRIPT: Automatically increment version to $VERSION"
