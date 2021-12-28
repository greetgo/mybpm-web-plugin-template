#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 113

VERSION_FILE=$(readlink -f ../../package.json)

echo -n "$VERSION_FILE"
