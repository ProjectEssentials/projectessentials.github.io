#!/usr/bin/env sh

set -e

npm run build
cp -r ./docs/.vuepress/dist/. ./

git add -A
git commit -m 'deploy'
git push

cd - || exit
