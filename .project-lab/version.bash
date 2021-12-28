#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 13

exec bash ../docker/meta/version.bash
