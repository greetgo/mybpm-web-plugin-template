#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 113

CORE_DIR="$(bash core-dir.bash)"

echo "CORE_DIR=$CORE_DIR"

node merge-plugin-config.js ./plugins-config.json "$CORE_DIR/apps/mybpm-web/src/plugins/plugins-config.json"
