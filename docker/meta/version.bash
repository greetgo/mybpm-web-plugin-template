#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 113

# shellcheck disable=SC2002
RETE=$(cat "../../package.json" | jq -r .version)

echo -n "$RETE"
