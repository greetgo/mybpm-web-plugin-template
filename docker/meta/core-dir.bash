#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 113

DEST_DIRS[0]="$HOME/WebstormProjects"
DEST_DIRS[1]="$HOME/IdeaProjects"
DEST_DIRS[2]="$HOME/git"

CORE_DIR=

for dir in ${DEST_DIRS[*]}; do
  # shellcheck disable=SC2044
  for prgDir in $(find "$dir" -maxdepth 1 -mindepth 1 -type d 2>/dev/null); do
    PNF="$prgDir/.greetgo/project-name.txt"
    if [ -f "$PNF" ] ; then
      if [ "mybpm-web" = "$(cat "$PNF")" ] ; then
        CORE_DIR="$prgDir"
      fi
    fi
  done
done

echo "$CORE_DIR"
